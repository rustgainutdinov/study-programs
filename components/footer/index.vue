<template>
  <section class="light-blue-bg section footer-block">
    <Links/>
    <Copyright/>
  </section>
</template>

<script>
  import Links from '@/components/footer/links';
  import Copyright from '@/components/footer/copyright';

  export default {
    name: "index",
    components: {
      Links,
      Copyright
    }
  }
</script>

<style lang="scss">
  .footer-block {
    margin-top: 80px;

    .footer {
      margin-bottom: 0;
      padding-top: 40px;
      padding-bottom: 0;

      .logo {
        width: 90%;
        height: 150px;
        margin: auto;
      }

      ul {
        li {
          line-height: 1em;
          margin-bottom: 30px;
          color: #333;
        }

        li:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .subscribe {
        text-align: left;

        input {
          margin-top: 10px;
          border: none;
          background: none;
          border-radius: 0;
          border-bottom: 1px solid #ebebeb;
          padding: 10px 0;
          color: #333;
        }

        input::placeholder {
          color: #777;
        }

        .send {
          margin-top: 30px;
          background: #3f51b5;
          border: none;
        }

        .send:hover {
          background: #5c6bc0;
        }
      }
    }

    .copyright {
      margin: 0 auto;
      padding: 30px 0 30px 15px;
      line-height: 1em;
    }
  }

  @media screen and (max-width: 1199px) {
    .footer-block {
      margin-top: 60px;

      .footer {
        padding-top: 30px;

        .logo {
          width: 80%;
          height: 130px;
          margin: auto;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer-block {
      .footer {
        .logo {
          width: 80%;
          height: 120px;
          margin: auto;
        }

        .subscribe {
          margin-top: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 567px) {
    .footer-block {
      .footer {

        .logo {
          width: 60%;
          margin: auto;
        }

        .subscribe {
          margin-top: 10px;
        }
      }

      ul {
        margin-top: 30px;
      }

      .copyright {
        padding-top: 45px;
      }
    }
  }
</style>