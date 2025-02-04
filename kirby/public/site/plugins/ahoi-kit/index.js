panel.plugin('tritrics/ahoi-kit', {
  'icons': {
    'event'    : '<path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>',
    'mail'     : '<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>',
    'image-lg' : '<path d="M1.19,23.16c-0.657,-0 -1.19,-0.534 -1.19,-1.192l-0,-19.216c-0,-0.659 0.546,-1.192 1.19,-1.192l21.62,-0c0.657,-0 1.19,0.534 1.19,1.192l-0,19.216c-0,0.658 -0.546,1.192 -1.19,1.192l-21.62,-0Zm20.41,-7.2l0,-12l-19.2,-0l-0,16.8l12,-12l7.2,7.2Zm0,3.394l-7.2,-7.2l-8.606,8.606l15.806,-0l0,-1.406Zm-14.4,-8.194c-1.325,-0 -2.4,-1.075 -2.4,-2.4c-0,-1.326 1.075,-2.4 2.4,-2.4c1.325,-0 2.4,1.074 2.4,2.4c-0,1.325 -1.075,2.4 -2.4,2.4Z" />',
    'image-sm' : '<path d="M4.794,19.199c-0.438,0 -0.793,-0.356 -0.793,-0.794l-0,-12.81c-0,-0.439 0.364,-0.794 0.793,-0.794l14.412,-0c0.438,-0 0.793,0.356 0.793,0.794l0,12.81c0,0.439 -0.364,0.794 -0.793,0.794l-14.412,0Zm13.605,-4.799l0,-7.999l-12.798,-0l-0,11.198l7.999,-7.999l4.799,4.8Zm0,2.262l-4.799,-4.799l-5.737,5.736l10.536,0l0,-0.937Zm-9.599,-5.462c-0.883,0 -1.6,-0.716 -1.6,-1.6c0,-0.883 0.717,-1.6 1.6,-1.6c0.884,0 1.6,0.717 1.6,1.6c0,0.884 -0.716,1.6 -1.6,1.6Z" />',
    'square'   : '<path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>',
    'landscape': '<path d="M21.45,19.5l-18.9,0c-0.58,0 -1.05,-0.42 -1.05,-0.937l-0,-13.125c-0,-0.518 0.47,-0.938 1.05,-0.938l18.9,0c0.58,0 1.05,0.42 1.05,0.938l0,13.125c0,0.517 -0.47,0.937 -1.05,0.937Zm-1.05,-1.875l0,-11.25l-16.8,0l0,11.25l16.8,0Z" />',
    'portrait' : '<path d="M4.5,21.45l0,-18.9c0,-0.58 0.42,-1.05 0.938,-1.05l13.125,0c0.517,0 0.937,0.47 0.937,1.05l0,18.9c0,0.58 -0.42,1.05 -0.937,1.05l-13.125,0c-0.518,0 -0.938,-0.47 -0.938,-1.05Zm1.875,-1.05l11.25,0l0,-16.8l-11.25,0l0,16.8Z" />',
    'file-text': '<path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path><',
    'file-list': '<path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>',
    'layout':    '<path d="M5 8H19V5H5V8ZM14 19V10H5V19H14ZM16 19H19V10H16V19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>',
  },
  blocks: {
    'article-heading': {
      template: `
        <div class="ahoi-block-article-heading" :data-level="content.level">
          <k-input
            type="text"
            ref="text"
            :placeholder="field('text').placeholder"
            :value="content.text"
            @input="update({ text: $event })"
          />
          <div v-if="!field('level').disabled" class="ahoi-heading-level" @click="changeLevel">
            <k-icon :type="icon" />
          </div>
        </div>
      `,
      methods: {
        changeLevel($event) {

          // doesn't work, there happens always a selection
          $event.stopPropagation();
          $event.preventDefault();
          window.document.body.blur();

          switch(this.content.level) {
            case 'h1':
              this.update({ level: 'h2' });
              break;
            case 'h2':
              this.update({ level: 'h3' });
              break;
            case 'h3':
              this.update({ level: 'h4' });
              break;
            default:
              this.update({ level: 'h1' });
          }
        }
      },
      computed: {
        icon() {
          return this.field('level').options.find(
            item => item.value === this.content.level
          ).icon;
        },
      }
    },
    'article-image': {
      template: `
        <k-block-figure
          class="ahoi-block-article-image"
          :caption="content.text"
          :captionMarks="field('text').marks"
          empty-text="Bild auswählen …"
          :cover="true"
          :disabled="disabled"
          :is-empty="!hasImage"
          empty-icon="image"
          @open="open"
          @update="update"
        >
          <div class="ahoi-image-canvas" :data-ratio="content.ratio" :data-size="content.size">
            <k-image-frame
              v-if="hasImage"
              :ratio="ratio"
              :cover="true"
              :src="image.url"
            />
          </div>
        </k-block-figure>
      `,
      computed: {
        hasImage() {
          return this.content.image?.[0]?.url !== undefined;
        },
        image() {
          return this.content.image[0];
        },
        ratio() {
          switch(this.content.ratio) {
            case 'landscape':
              return '3/2';
            case 'portrait':
              return '2/3';
            default:
              return '1/1'
          }
        }
      },
    },
    'article-images': {
      template: `
        <k-block-figure
          class="ahoi-block-article-images"
          :caption="content.text"
          :captionMarks="field('text').marks"
          empty-text="Bilder auswählen …"
          :disabled="disabled"
          :is-empty="!hasImages"
          empty-icon="images"
          @open="open"
          @update="update"
        >
          <ul :data-ratio="content.ratio" :data-size="content.size">
            <li v-for="image in content.images" :key="image.id">
              <k-image-frame
                :ratio="ratio"
                :cover="true"
                :src="image.url"
              />
            </li>
          </ul>
        </k-block-figure>
      `,
      computed: {
        hasImages() {
          return this.content.images?.[0]?.url !== undefined;
        },
        ratio() {
          switch(this.content.ratio) {
            case 'landscape':
              return '3/2';
            case 'portrait':
              return '2/3';
            default:
              return '1/1'
          }
        }
      },
    },
    'article-links': {
      template: `
        <k-block-figure
          class="ahoi-block-article-links"
          empty-text="Links eingeben …"
          :disabled="disabled"
          :is-empty="!hasLinks"
          empty-icon="url"
          @open="open"
          @update="update"
        >
          <k-button
            v-for="(row, key) in content.links"
            v-if="row.text !== ''"
            :key="key"
            :theme="buttonTheme(row.style)"
            :variant="buttonVariant(row.style)"
          >
            {{ row.text }}
          </k-button>
        </k-block-figure>
      `,
      methods: {
        // update structure field
        //onInputText(value, key) {
        //  const content = this.content.links
        //  content[key].text = value
        //  this.update({ 'links': content });
        //}
        buttonTheme(style) {
          switch(style) {
            case 'text':
              return 'none';
            case 'highlight':
              return 'blue-600';
            default:
              return 'gray-400';
          }
        },
        buttonVariant(style) {
          switch(style) {
            case 'text':
              return 'default';
            default:
              return 'filled';
          }
        },
        openLink(row) {
          console.log(this.field('links'));
          // @TODO: open row in structure-field
          // this is not working, because field is just an object
          //this.field('links').open(row);
        }
      },
      computed: {
        hasLinks() {
          return this.content.links?.[0]?.link !== undefined;
        }
      },
    },
    'article-text': {
      template: `
        <div class="ahoi-block-article-text" :data-type="content.columns" :data-style="content.style">
          <k-writer
            :marks="field('text').marks"
            :nodes="field('text').nodes"
            :placeholder="field('text').placeholder"
            :value="content.text"
            @input="update({ text: $event })"
          />
          <k-writer
            v-if="content.columns === 'col2'"
            :marks="field('text2').marks"
            :nodes="field('text2').nodes"
            :placeholder="field('text2').placeholder"
            :value="content.text2"
            @input="update({ text2: $event })"
          />
        </div>
      `,
    },
  }
});