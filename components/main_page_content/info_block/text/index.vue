<template>
  <el-col :sm="12" :md="12" :lg="12" :xl="12" class="text">
    <h1><span class="large">Пусть меня научат...</span></h1>
    <h4 class="poem">Книгу переворошив,<br>
      намотай себе на ус -<br>
      все работы хороши,<br>
      выбирай на вкус!</h4>
    <p class="h4">В.Маяковский «Кем быть?» 1928 год</p>
    <!--<nuxt-link :to="{path: '/', hash: '#search'}">-->
    <button type="primary" class="default-button large-button" @click="toSearch">Перейти к поиску</button>
    <!--</nuxt-link>-->
  </el-col>
</template>

<script>
	import nuxt

	export default {
		name: "index",
		methods: {
			toSearch() {
				const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
					animationTime = 300,
					framesCount = 20;

				anchors.forEach(function (item) {
					// каждому якорю присваиваем обработчик события
					item.addEventListener('click', function (e) {
						// убираем стандартное поведение
						e.preventDefault();

						// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
						let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

						// запускаем интервал, в котором
						let scroller = setInterval(function () {
							// считаем на сколько скроллить за 1 такт
							let scrollBy = coordY / framesCount;

							// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
							// и дно страницы не достигнуто
							if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
								// то скроллим на к-во пикселей, которое соответствует одному такту
								window.scrollBy(0, scrollBy);
							} else {
								// иначе добираемся до элемента и выходим из интервала
								window.scrollTo(0, coordY);
								clearInterval(scroller);
							}
							// время интервала равняется частному от времени анимации и к-ва кадров
						}, animationTime / framesCount);
					});
				});
				this.$nuxt.$router.replace({path: '/', hash: '#search'});
			}
		}
	}
</script>

<style scoped>

</style>
