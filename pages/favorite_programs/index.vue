<template>
  <div>
    <section>
      <div class="container">
        <UniversitiesList :listData="favoriteProgramsResult" title="Избранные программы"/>
      </div>
    </section>
  </div>
</template>

<script>
  import UniversitiesList from '@/components/universities_list';
  import Cookie from "js-cookie";

  export default {
    layout: 'default',
    components: {
      UniversitiesList,
    },
    data() {
      return {}
    },
    async asyncData(context) {
      var favoriteProgramsIdStr = '';
      var usersPersonalData = context.store.getters.getUserData;
      var favoriteProgramsResultId = '';

      if (context.req) {
        var cookieIndex = context.req.rawHeaders.indexOf('Cookie') + 1;
        var cookie = context.req.rawHeaders[cookieIndex].split(';');
        cookie.forEach((item) => {
          if (item.indexOf('favouritePrograms=') !== -1) {
            favoriteProgramsResultId = item.split('favouritePrograms=')[1];
          }
        });
      } else {
        favoriteProgramsResultId = Cookie.get('favouritePrograms');
      }

      if (favoriteProgramsResultId) {
        favoriteProgramsResultId = decodeURIComponent(decodeURIComponent(favoriteProgramsResultId));
        if (favoriteProgramsResultId.indexOf(',') !== -1) {
          favoriteProgramsIdStr = favoriteProgramsResultId.split(',').join("','");
        } else {
          favoriteProgramsIdStr = favoriteProgramsResultId;
        }
      }


      if (usersPersonalData.accessRight > 100) {
        await context.$axios.$get('/execute',
          {
            params: {
              query: 'get_favorite_programs_id',
              data: {
                users_id: usersPersonalData.userId
              }
            },
            withCredentials: true
          })
          .then(result => {
            if (result.statusCode === '023ms7fbgs54bw9y' && result.data !== null) {
              favoriteProgramsResultId = result.data;
              favoriteProgramsResultId.forEach((item, i) => {
                if (i !== 0) {
                  favoriteProgramsIdStr += "','";
                }
                favoriteProgramsIdStr += item.programs_id;
              });
            }
          })
          .catch(e => {
            console.error(e);
            favoriteProgramsIdStr = ''
          });
      }
      return await
        context.$axios.$get('/execute',
          {
            params: {
              query: 'select_programs_data_for_search_list',
              data: {
                programs_id: favoriteProgramsIdStr
              }
            },
            withCredentials: true
          })
          .then(result => {
            console.log(result);
            if (result.statusCode !== '023ms7fbgs54bw9y' || result.data == null) {
              return {
                favoriteProgramsResult: []
              }
            }
            return {
              favoriteProgramsResult: result.data,
            }
          })
          .catch(e => {
            console.error(e);
            return {
              favoriteProgramsResult: []
            }
          })
    },
  }
</script>

<style>
</style>
