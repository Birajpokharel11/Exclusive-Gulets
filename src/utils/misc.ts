import _ from 'lodash';

export const responseErrorMessage = (statusCode) => {
  // const clientErrors = /^[4][0-9][0-9]$/;
  const serverErrors = /^[5][0-9][0-9]$/;

  switch (statusCode) {
    case 404:
      return {
        status: statusCode,
        statusText: 'Page Not Found'
      };
    case 500 || serverErrors.test(statusCode):
      return {
        status: statusCode,
        statusText: 'Server Error'
      };
    default:
      return false;
  }
};

export function getTitleContent(url) {
  if (!url) return ' ';
  return url.slice(1).replaceAll('/', ' | ').replaceAll('-', ' ');
}

export function getCountryStr(countryList, countryListLength) {
  return countryList.map((country, i) => {
    return countryListLength === i + 1
      ? `${country.name}`
      : `${country.name}, `;
  });
}

export interface SmoothScrollProps {
  timer?: any;
  stop?: () => void;
  scrollToElementById?: (id?: any, props?: any, cb?: any) => boolean;
}

export const smoothScroll: SmoothScrollProps = {
  timer: null,

  stop: function () {
    clearTimeout(this.timer);
  },

  scrollToElementById: function (id, props = {}, cb) {
    if (!id) {
      return false;
    }
    const node = document.getElementById(id);

    if (!node) {
      return false;
    }

    const settings = {
      duration: 1000,
      ...props
    };
    const currentScrollY = window.scrollY;
    const startTime = Date.now();

    let percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    const step = () => {
      let targetY =
        +(node.getBoundingClientRect().top + window.pageYOffset).toFixed(0) +
        (props.mode === 'mobile' ? 30 : 0);
      let yScroll;
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration && targetY === currentScrollY) {
        clearTimeout(this.timer);
        typeof cb === 'function' && cb();
      }

      percentage = elapsed / settings.duration;

      if (
        targetY === currentScrollY ||
        (window.innerHeight + window.scrollY >=
          document.getElementById('root').offsetHeight &&
          targetY > currentScrollY)
      ) {
        clearTimeout(this.timer);
        typeof cb === 'function' && cb();
      } else {
        if (targetY < window.scrollY) {
          yScroll = +(currentScrollY - 5000 * percentage).toFixed(0);

          if (yScroll < targetY) {
            yScroll = targetY;
          }
          window.scrollTo(0, yScroll);
          this.timer = setTimeout(step, 5);
        } else if (targetY > window.scrollY) {
          yScroll = +(
            currentScrollY +
            (targetY < 3000 ? 3000 : targetY) * percentage
          ).toFixed(0);

          if (yScroll > targetY) {
            yScroll = targetY;
          }

          if (yScroll < currentScrollY && targetY > currentScrollY) {
            this.timer = setTimeout(step, 5);
          } else {
            window.scrollTo(0, yScroll);
            this.timer = setTimeout(step, 5);
          }
        } else {
          clearTimeout(this.timer);
          typeof cb === 'function' && cb();
        }
      }
    };

    this.timer = setTimeout(step, 5);
  }
};

export const createMarkup = (encodedHtml) => ({
  __html: _.unescape(encodedHtml)
});
