import Slider from 'react-slick';
const MobileData = [
  {
    img: '/assets/images/MobilePic1.svg',
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: '/assets/images/MobilePic2.svg',
    title: 'Image',
    author: 'author',
    cols: 1
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: '12px',
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: '12px',
        zIndex: '3',
        display: 'block'
      }}
      onClick={onClick}
    />
  );
}

export default function YachtsSlider(props) {
  const { imageList } = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {imageList.map((item, index) => (
          <div key={index}>
            <img
              src={item.file?.url}
              data-cy={`images-slider-pic-${index}`}
              style={{
                width: '98%',
                height: '408px'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
