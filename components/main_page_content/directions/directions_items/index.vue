<template>
  <el-col :span="24">
    <el-row class="directions">
      <Item
        v-for="(item, key, i) in directionsList"
        :key="i"
        :itemData="item"
      />
    </el-row>
  </el-col>
</template>

<script>
  import Item from '@/components/main_page_content/directions/directions_items/item';

  export default {
    name: "index",
    components: {
      Item
    },
    data() {
      return {
        directionsList: [
          {
            setBackground: {
              background: '#3e50b4'
            },
            setIconColor: {
              color: '#1a237e'
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 93 93"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_833316240">\n' +
              '   <rect class="fill0" x="51" y="32" width="29.3466" height="6.28856" rx="3" ry="3"/>\n' +
              '   <path class="fill0" d="M23 32l8 0 0 -8c0,-2 2,-3 3,-3l0 0c2,0 4,1 4,3l0 8 8 0c2,0 3,2 3,4l0 0c0,1 -1,3 -3,3l-8 0 0 8c0,2 -2,3 -4,3l0 0c-1,0 -3,-1 -3,-3l0 -8 -8 0c-2,0 -3,-2 -3,-3l0 0c0,-2 1,-4 3,-4z"/>\n' +
              '   <path class="fill0" d="M24 71l6 -6 -6 -6c-2,-1 -2,-3 0,-4l0 0c1,-1 3,-1 4,0l6 6 6 -6c1,-1 3,-1 4,0l0 0c2,1 2,3 0,4l-5 6 5 6c2,2 2,4 0,5l0 0c-1,1 -3,1 -4,0l-6 -6 -6 6c-1,1 -3,1 -4,0l0 0c-2,-1 -2,-3 0,-5z"/>\n' +
              '   <g>\n' +
              '    <rect class="fill0" x="51" y="60" width="29.3466" height="6.28856" rx="3" ry="3"/>\n' +
              '    <circle class="fill0" cx="66" cy="73" r="4"/>\n' +
              '    <circle class="fill0" cx="66" cy="53" r="4"/>\n' +
              '   </g>\n' +
              '   <path class="fill0" d="M23 6l57 0c7,0 13,6 13,13l0 61c0,7 -6,13 -13,13l-61 0c-8,0 -13,-6 -13,-13l0 -42 6 0 0 42c0,4 3,7 7,7l61 0c4,0 7,-3 7,-7l0 -61c0,-4 -3,-7 -7,-7l-57 0 0 -6z"/>\n' +
              '   <path class="fill0" d="M14 0c7,0 13,6 13,14 0,7 -6,13 -13,13 -8,0 -14,-6 -14,-13 0,-8 6,-14 14,-14zm0 6c4,0 7,3 7,8 0,4 -3,7 -7,7 -5,0 -8,-3 -8,-7 0,-5 3,-8 8,-8z"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Математические и естественные науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'mathematics'
          },
          {
            setBackground: {
              background: '#e64a19'
            },
            setIconColor: {
              color: '#bf360c',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 318 346"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_835295552">\n' +
              '   <path class="fill1" d="M29 290c16,0 29,12 29,28 0,15 -13,28 -29,28 -15,0 -28,-13 -28,-28 0,-16 13,-28 28,-28zm0 11c9,0 17,8 17,17 0,9 -8,17 -17,17 -9,0 -16,-8 -16,-17 0,-9 7,-17 16,-17z"/>\n' +
              '   <path class="fill1" d="M290 290c16,0 28,12 28,28 0,15 -12,28 -28,28 -16,0 -28,-13 -28,-28 0,-16 12,-28 28,-28zm0 11c9,0 17,8 17,17 0,9 -8,17 -17,17 -9,0 -17,-8 -17,-17 0,-9 8,-17 17,-17z"/>\n' +
              '   <path class="fill1" d="M225 240c15,0 28,12 28,28 0,15 -13,28 -28,28 -16,0 -28,-13 -28,-28 0,-16 12,-28 28,-28zm0 11c9,0 17,8 17,17 0,9 -8,16 -17,16 -9,0 -17,-7 -17,-16 0,-9 8,-17 17,-17z"/>\n' +
              '   <path class="fill1" d="M160 290c15,0 28,12 28,28 0,15 -13,28 -28,28 -16,0 -29,-13 -29,-28 0,-16 13,-28 29,-28zm0 11c9,0 16,8 16,17 0,9 -7,17 -16,17 -10,0 -17,-8 -17,-17 0,-9 7,-17 17,-17z"/>\n' +
              '   <path class="fill1" d="M94 240c16,0 29,12 29,28 0,15 -13,28 -29,28 -15,0 -28,-13 -28,-28 0,-16 13,-28 28,-28zm0 11c10,0 17,8 17,17 0,9 -7,16 -17,16 -9,0 -16,-7 -16,-16 0,-9 7,-17 16,-17z"/>\n' +
              '   <path class="fill1" d="M159 116c23,0 42,19 42,42 0,23 -19,41 -42,41 -23,0 -41,-18 -41,-41 0,-23 18,-42 41,-42zm0 14c16,0 28,12 28,28 0,15 -12,28 -28,28 -15,0 -28,-13 -28,-28 0,-16 13,-28 28,-28z"/>\n' +
              '   <path class="fill1" d="M159 56c56,0 102,46 102,102l0 28 36 50 0 46 -15 0 0 -42 -37 -50 -1 -32c0,-47 -38,-85 -85,-85 -47,0 -85,38 -85,85l0 29 -37 53 0 42 -14 0 0 -46 35 -50 0 -28c0,-56 45,-102 101,-102z"/>\n' +
              '   <path class="fill1" d="M159 87c40,0 73,33 73,73l0 35 -12 1 0 -1 -3 1 0 -36c0,-32 -26,-59 -58,-59 -32,0 -57,27 -57,59l0 36 -3 0 0 0 -12 0 0 -36c0,-40 32,-73 72,-73z"/>\n' +
              '   <rect class="fill1" x="152" y="196" width="15.1337" height="84.9484"/>\n' +
              '   <rect class="fill1" x="87" y="209" width="15.1337" height="21.2269"/>\n' +
              '   <rect class="fill1" x="217" y="210" width="15.1337" height="21.2269"/>\n' +
              '   <path class="fill1" d="M43 187l-43 0 0 -66 37 0c2,-8 5,-16 9,-23l-25 -25 52 -53 26 26c7,-4 15,-8 24,-10l0 -36 74 0 0 37c8,1 16,4 23,8l25 -25 53 53 -25 25c4,8 7,16 9,24l36 0 0 66 -42 0 0 -15 27 0 0 -38 -32 0c-3,-14 -9,-27 -17,-39l24 -23 -32 -32 -25 22c-11,-7 -24,-12 -38,-16l0 -33 -47 0 0 33c-14,4 -27,9 -39,16l-24 -22 -31 31 23 25c-8,11 -14,24 -16,39l-34 0 0 37 29 0 -1 14z"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Инженерное дело',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'engineering'
          },
          {
            setBackground: {
              background: '#009587'
            },
            setIconColor: {
              color: '#004d40',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="60px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 45 59"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_835292160">\n' +
              '   <path class="fill2" d="M10 8l3 0c1,1 2,3 0,3l-4 0c0,0 -1,1 -1,1l0 15c0,1 -2,1 -2,0l0 -15c0,-2 2,-4 4,-4zm28 0l3 0c3,0 4,2 4,4l0 43c0,2 -1,4 -4,4l-31 0c-2,0 -4,-2 -4,-4l0 -14c0,-2 2,-2 2,0l0 14c0,1 1,1 1,1l33 0c1,0 1,0 1,-1l0 -43c0,0 0,-1 -1,-1l-4 0c-1,0 -1,-2 0,-3z"/>\n' +
              '   <path class="fill2" d="M1 37c-1,-1 -1,-2 0,-3l7 0 4 -7c0,-1 1,-1 2,0l2 11 3 -4 6 0 3 -10c1,-1 2,-1 3,0l2 15 2 -5 4 0c1,0 1,2 0,3l-2 0 -3 8c-1,1 -1,2 -2,1l-3 -15 -1 4c-1,1 -1,1 -1,2l-7 0 -2 5c-1,1 -2,1 -3,0l-2 -10 -3 5 -9 0z"/>\n' +
              '   <path class="fill2" d="M19 6l1 0 0 0 0 0c0,-4 3,-6 6,-6 3,0 5,2 5,6l0 0 0 0 2 0c1,0 3,1 3,2l0 5c0,1 -2,2 -3,2l-14 0c-2,0 -3,-1 -3,-2l0 -5c0,-1 1,-2 3,-2zm4 0l6 0 0 0c0,-2 -1,-3 -3,-3 -2,0 -3,1 -3,3l0 0zm-4 2l13 0c1,0 1,0 1,1l0 3c0,0 0,1 -1,1l-13 0c0,0 -1,-1 -1,-1l0 -3c0,-1 1,-1 1,-1z"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Здравоохранение и медицинские науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'medicine'
          },
          {
            setBackground: {
              background: '#fb8c00'
            },
            setIconColor: {
              color: '#e65100',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 184 184"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_835293632">\n' +
              '   <path class="fill3" d="M58 97c10,-3 18,-10 25,-19 -5,11 -11,19 -20,25 23,-3 40,-13 39,-45 -26,-1 -42,11 -44,39z"/>\n' +
              '   <path class="fill3" d="M62 92c-8,-2 -15,-8 -20,-16 4,9 9,16 16,21 -19,-2 -34,-11 -33,-38 22,0 36,9 37,33z"/>\n' +
              '   <path class="fill3" d="M19 19c24,-25 65,-25 89,0 23,22 25,58 6,83l70 71 -11 11 -71 -70c-25,19 -61,17 -83,-6 -25,-24 -25,-65 0,-89zm11 11c19,-18 49,-18 67,0 19,19 19,49 0,67 -18,19 -48,19 -67,0 -18,-18 -18,-48 0,-67z"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Сельско-хозяйственные <br>науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'agricultural'
          },
          {
            setBackground: {
              background: '#673ab7'
            },
            setIconColor: {
              color: '#4a148c',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 348 334"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_613176240">\n' +
              '   <polygon class="fill4" points="154,155 39,155 0,128 134,128 175,0 217,128 348,128 310,156 196,156 175,93 "/>\n' +
              '   <polygon class="fill4" points="107,206 79,185 144,185 121,259 175,221 229,260 203,185 271,185 242,206 283,333 174,254 67,334 "/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>',
            iconName: 'person',
            title: 'Военные науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'military'
          },
          {
            setBackground: {
              background: '#9d9d9d'
            },
            setIconColor: {
              color: '#424242',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 189 192"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_835298944">\n' +
              '   <path class="fill5" d="M95 0c11,0 20,9 20,20 0,11 -9,21 -20,21 -11,0 -21,-10 -21,-21 0,-11 10,-20 21,-20zm0 7c7,0 13,6 13,13 0,8 -6,14 -13,14 -8,0 -14,-6 -14,-14 0,-7 6,-13 14,-13z"/>\n' +
              '   <path class="fill5" d="M37 56c11,0 20,9 20,20 0,12 -9,21 -20,21 -12,0 -21,-9 -21,-21 0,-11 9,-20 21,-20zm0 7c7,0 13,6 13,13 0,8 -6,14 -13,14 -8,0 -14,-6 -14,-14 0,-7 6,-13 14,-13z"/>\n' +
              '   <path class="fill5" d="M95 78c11,0 20,9 20,20 0,12 -9,21 -20,21 -11,0 -20,-9 -20,-21 0,-11 9,-20 20,-20zm0 7c7,0 14,6 14,13 0,8 -7,14 -14,14 -8,0 -14,-6 -14,-14 0,-7 6,-13 14,-13z"/>\n' +
              '   <path class="fill5" d="M153 57c11,0 20,9 20,20 0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20zm0 6c8,0 14,6 14,14 0,7 -6,14 -14,14 -7,0 -14,-7 -14,-14 0,-8 7,-14 14,-14z"/>\n' +
              '   <path class="fill5" d="M95 129c23,0 41,19 41,42l0 20 -6 1 0 -21c0,-20 -16,-35 -35,-35 -20,0 -36,15 -36,35l1 21 -7 0 0 -21c0,-23 18,-42 42,-42z"/>\n' +
              '   <g>\n' +
              '    <path class="fill5" d="M37 107c19,0 36,16 36,35l-6 0c-1,-16 -14,-28 -30,-28 -17,0 -30,12 -30,28l-1 22 -6 0 0 -22c1,-19 17,-35 37,-35z"/>\n' +
              '    <path class="fill5" d="M153 107c-20,0 -36,16 -37,35l6 0c1,-16 14,-28 31,-28 16,0 29,12 30,28l0 22 6 0 0 -22c-1,-19 -17,-35 -36,-35z"/>\n' +
              '   </g>\n' +
              '   <rect class="fill5" x="91" y="54" width="7.2379" height="13.9811" rx="4" ry="4"/>\n' +
              '   <rect class="fill5" transform="matrix(0.114846 -0.315537 0.315537 0.114846 66.9944 91.8569)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <rect class="fill5" transform="matrix(0.237438 -0.237438 0.237438 0.237438 116.352 46.7308)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <rect class="fill5" x="91" y="35" width="7.2379" height="13.9811" rx="4" ry="4"/>\n' +
              '   <rect class="fill5" transform="matrix(0.114846 -0.315537 0.315537 0.114846 49.7671 85.5867)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <rect class="fill5" transform="matrix(0.237438 -0.237438 0.237438 0.237438 103.389 33.7676)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <path class="fill5" d="M94 72l1 0c2,0 3,1 3,3l0 6c0,2 -1,4 -3,4l-1 0c-1,0 -3,-2 -3,-4l0 -6c0,-2 2,-3 3,-3z"/>\n' +
              '   <path class="fill5" d="M132 57l0 0c1,-1 3,-1 5,0l5 5c1,2 1,4 0,5l0 0c-1,2 -4,2 -5,0l-5 -5c-2,-1 -2,-4 0,-5z"/>\n' +
              '   <rect class="fill5" transform="matrix(-0.237438 -0.237438 -0.237438 0.237438 73.6322 46.134)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <rect class="fill5" transform="matrix(-0.237438 -0.237438 -0.237438 0.237438 86.5955 33.1708)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <path class="fill5" d="M58 56l0 0c-1,-1 -3,-1 -5,0l-5 6c-1,1 -1,3 0,5l0 0c1,1 4,1 5,0l5 -5c2,-2 2,-4 0,-6z"/>\n' +
              '   <rect class="fill5" transform="matrix(-0.114846 -0.315537 -0.315537 0.114846 123.539 91.4306)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '   <rect class="fill5" transform="matrix(-0.114846 -0.315537 -0.315537 0.114846 140.766 85.1604)" width="21.555" height="41.6367" rx="11" ry="11"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Науки об обществе',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'society'
          },
          {
            setBackground: {
              background: '#785447'
            },
            setIconColor: {
              color: '#4e342e',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="85px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 46 39"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g xmlns="http://www.w3.org/2000/svg" id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_833521632">\n' +
              '   <path class="fill6" d="M17 0l27 0c1,0 2,1 2,2l0 19c0,1 -1,2 -2,2l-22 0 3 -3 17 0c1,0 1,0 1,0l0 -16c0,-1 0,-1 -1,-1l-23 0c0,0 -1,0 -1,1l0 9 -2 3 0 -14c0,-1 0,-2 1,-2z"/>\n' +
              '   <circle class="fill6" cx="9" cy="33" r="6"/>\n' +
              '   <circle class="fill6" cx="24" cy="33" r="6"/>\n' +
              '   <circle class="fill6" cx="38" cy="33" r="6"/>\n' +
              '   <path class="fill6" d="M22 13c2,0 3,1 3,3 0,0 0,1 -1,2l-8 8 0 2c-2,-2 -4,-3 -7,-3 -3,0 -6,2 -7,5l0 -7c0,-1 1,-2 2,-2l9 0c0,0 0,0 0,0l7 -7 0 0c1,-1 1,-1 2,-1z"/>\n' +
              '   <circle class="fill6" cx="7" cy="13" r="7"/>\n' +
              '  </g>\n' +
              ' </g>' +
              '</svg>\n',
            iconName: 'person',
            title: 'Образование и педагогические науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'education'
          },
          {
            setBackground: {
              background: '#5f7c8a'
            },
            setIconColor: {
              color: '#37474f',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="90px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 58 52"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <path class="fill7" d="M53 19l-11 28 -32 0c-7,-1 -6,-11 -1,-13l35 1 13 -31c1,-2 1,-4 -1,-4l-36 0c-3,1 -6,3 -7,6l-12 30c-1,3 -1,6 0,9 2,4 5,6 8,7l36 0 12 -32c-1,-3 -2,-3 -4,-1zm-45 11l33 0 12 -26 -32 1c-1,0 -3,0 -4,2l-9 23z"/>\n' +
              '  <path class="fill7" d="M10 38l31 0c1,0 1,1 0,2l-31 0c-2,-1 -2,-2 0,-2z"/>\n' +
              '  <path class="fill7" d="M10 42l31 0c1,0 1,2 0,2l-31 0c-2,0 -2,-2 0,-2z"/>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Гуманитарные науки',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'humanities'
          },
          {
            setBackground: {
              background: '#e91e63'
            },
            setIconColor: {
              color: '#880e4f',
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="80px" version="1.0" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"\n' +
              'viewBox="0 0 611 539"\n' +
              ' xmlns:xlink="http://www.w3.org/1999/xlink">' +
              '<g id="Layer_x0020_1">\n' +
              '  <metadata id="CorelCorpID_0Corel-Layer"/>\n' +
              '  <g id="_820770048">\n' +
              '   <polygon class="fill8-0" points="0,539 611,539 611,0 0,0 "/>\n' +
              '   <path class="fill8-1" d="M283 488c1,-1 0,1 0,0 3,1 17,-8 20,-8 0,1 3,2 3,2 19,9 32,12 53,15 6,1 13,1 20,1 10,0 22,-2 31,-4 12,-2 22,-5 33,-10 11,-5 23,-11 32,-18 1,-1 2,-1 4,-2 2,-2 4,-4 6,-5l6 -5c4,-4 7,-8 11,-12 2,-2 2,-2 3,-4 1,-1 0,0 1,-1 1,0 1,-1 2,-1 4,-6 8,-12 12,-19l3 -5c1,0 1,0 1,-1l4 -8c1,-3 3,-5 4,-8 1,-2 2,-5 3,-8 5,-12 9,-32 10,-46 0,-7 0,-14 0,-21 0,-7 0,-15 0,-22l0 -178c0,-8 1,-39 0,-45 -1,1 -1,1 -2,2 -4,4 -12,10 -16,14l-8 5c-2,1 -3,2 -5,3 -15,11 -27,17 -44,25 -13,5 -27,9 -41,13 -4,1 -8,2 -12,2l-18 3c-5,1 -6,2 -6,-1 0,-1 0,-2 0,-3 0,-2 0,-3 0,-5 -1,-1 -15,-13 -19,-15l-9 -7c-1,-1 -2,-1 -3,-2 -5,-3 -13,-8 -18,-11 -6,-3 -11,-6 -16,-8 -2,-1 -4,-2 -6,-3l-24 -9c-1,-1 -1,-1 -3,-1l-10 -3c-1,-1 -2,-1 -3,-1 -3,-1 -6,-2 -10,-3 -2,0 -5,-1 -7,-1l-14 -3c-3,0 -5,0 -8,-1l-15 -2c-11,0 -23,0 -34,0 -8,0 -26,2 -34,4l-18 3c-2,1 -5,1 -7,2 -1,0 -2,0 -3,1l-7 2c-1,0 -2,0 -3,1 -2,1 -5,1 -8,2l0 1c-1,0 -1,0 -1,0 -2,0 -2,1 -3,1 -2,1 -4,1 -6,2 -1,1 -1,1 -1,1 -6,2 -12,5 -17,7l-6 3c0,0 0,0 -1,0 -5,3 -19,10 -22,14 -1,1 -1,1 -1,3 0,6 0,11 0,17 0,23 1,45 0,68 0,22 0,45 0,68l0 50c0,6 0,12 0,17 0,8 1,24 3,31 0,5 1,10 3,14l2 10c5,13 11,26 18,37 9,14 22,29 35,39 7,5 14,11 22,15 2,1 3,2 5,3 18,9 31,14 51,18 2,0 5,0 7,1 22,3 48,1 68,-5 5,-2 9,-3 13,-5z"/>\n' +
              '   <path class="fill8-0" d="M84 121c-1,23 0,46 0,69l0 146c0,5 0,11 1,16 0,3 1,5 1,7l4 14c1,5 2,9 4,13 5,12 14,27 23,37 7,8 11,12 20,19 5,4 7,6 13,9 3,2 7,5 11,6 2,1 4,2 6,3 2,1 4,2 6,3l13 4c11,3 26,5 37,5 13,0 27,-2 38,-5 3,-1 11,-3 13,-5 -1,-1 -3,-3 -4,-4 -2,-1 -4,-2 -5,-4 -16,-13 -29,-32 -38,-50l-4 -10c-1,-1 -1,-1 -3,-1l-17 -1c-20,-2 -48,-12 -65,-24 -1,-1 -3,-2 -5,-3 -6,-5 -20,-16 -24,-21 1,-2 4,-4 5,-5l2 -2c1,-1 2,-2 3,-3 2,-2 7,-7 10,-9 2,3 5,6 7,8 3,2 5,4 9,7 8,6 11,8 19,12 14,8 34,14 50,14l-2 -16c-2,-30 -1,-57 -1,-86 -1,-12 0,-24 0,-36 -1,-19 0,-41 0,-61 0,-2 -1,-6 -1,-9 1,-11 0,-23 0,-34 0,-12 1,-24 0,-36 -6,0 -13,0 -19,1 -22,2 -23,2 -43,6 -2,1 -6,2 -8,2 -2,1 -6,2 -8,2 -2,1 -5,2 -7,3l-15 5c-6,3 -12,6 -17,8l-9 6z"/>\n' +
              '   <path class="fill8-0" d="M393 178l-1 98c0,1 0,41 1,42 0,1 6,1 7,1 8,1 15,3 22,5 18,6 38,16 52,28l10 9c1,1 4,4 5,4 0,1 0,1 -1,1 -1,2 -4,5 -6,6 -4,4 -9,9 -13,13l-3 -4c-2,-3 -5,-5 -8,-7 -4,-4 -8,-7 -12,-10 -2,-1 -3,-1 -5,-2l-15 -8c-1,0 -3,-1 -5,-2 -6,-2 -22,-7 -30,-7 0,3 0,7 -1,10 -1,6 -2,12 -3,19 -3,8 -6,17 -9,25 -2,5 -5,10 -8,15 -7,13 -18,27 -29,37l-11 11c2,1 4,2 7,3 8,2 17,4 26,5 34,3 62,-4 91,-22 4,-3 9,-6 13,-10 5,-3 9,-7 12,-11 2,-2 4,-3 5,-5 3,-4 7,-8 9,-12 1,-1 2,-2 2,-3 11,-17 21,-41 22,-62 0,-6 1,-9 1,-16 0,-29 -1,-57 0,-86l0 -14c0,-8 0,-30 0,-36l0 -65 -14 8c-5,2 -10,4 -15,7 -2,1 -5,2 -7,3l-8 4c-20,7 -40,13 -61,16 -3,0 -6,1 -10,1 0,0 -9,1 -10,1 0,1 0,1 0,2l0 8z"/>\n' +
              '   <path class="fill8-0" d="M242 365c3,-1 9,-2 13,-3 4,-1 11,-4 16,-6 6,-2 8,-4 13,-7 5,-2 11,-7 17,-10 13,-9 30,-15 46,-18l18 -3c0,-6 0,-13 0,-18 0,-7 0,-13 0,-19 0,-13 0,-25 0,-38l0 -55c0,-5 1,-16 0,-18 0,-1 -16,-2 -19,-2 -17,-1 -43,-6 -58,-11l-18 -6c-6,-3 -12,-5 -18,-8l-14 -6c0,19 1,39 0,58 0,37 0,77 0,115 0,9 0,19 0,29 1,4 1,9 2,13 0,2 0,4 0,6 1,2 2,5 2,7z"/>\n' +
              '   <path class="fill8-0" d="M251 390c0,2 5,10 6,11 0,1 1,2 1,3 3,4 6,9 9,13 4,6 13,15 19,20 0,0 0,0 1,1l13 10c2,1 2,1 3,0 12,-8 23,-18 31,-29 3,-3 5,-7 8,-10 11,-18 18,-35 21,-56 1,-2 1,-6 1,-8 -4,0 -13,2 -16,3 -12,3 -19,6 -29,11 -13,6 -18,13 -38,22 -2,0 -5,1 -7,2l-15 5c-2,0 -6,1 -8,2 0,0 0,0 0,0z"/>\n' +
              '   <path class="fill8-0" d="M365 144c-1,-2 -3,-3 -4,-4 -11,-8 -23,-16 -35,-22l-9 -5c-6,-3 -12,-5 -18,-8 -3,-1 -12,-4 -14,-5 -1,-1 1,1 -2,0 -5,-2 -9,-3 -13,-4 -4,-1 -7,-2 -11,-2 -8,-2 -15,-4 -23,-4 -8,-1 -16,-2 -24,-2 0,2 0,1 3,4 3,2 4,3 7,5 2,1 3,2 4,3 5,3 15,9 20,12l20 10c1,0 1,0 2,1l19 7c1,0 3,1 5,1 1,1 3,1 5,2 6,2 14,4 21,5 15,3 19,3 34,5 4,0 8,0 13,1z"/>\n' +
              '   <path class="fill8-1" d="M438 221c0,10 8,18 18,18 15,0 23,-17 12,-29 -5,-6 -16,-7 -24,0 -3,2 -6,7 -6,11z"/>\n' +
              '   <path class="fill8-1" d="M147 205c-5,1 -9,2 -12,6 -4,5 -6,12 -2,19 1,2 2,3 4,5 4,3 8,4 13,4 11,-2 17,-12 16,-19 -1,-2 0,-3 -2,-6 -3,-4 -6,-7 -10,-8 -2,-1 -5,-2 -7,-1z"/>\n' +
              '   <path class="fill8-1" d="M299 205c-3,1 -4,1 -6,2 -12,6 -12,21 -3,28 8,6 18,5 24,-2 12,-14 -3,-30 -15,-28z"/>\n' +
              '  </g>\n' +
              ' </g>\n' +
              '</svg>\n',
            iconName: 'person',
            title: 'Искусство и культура',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eius modi, natus quam rerum velit.',
            link: 'culture'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
