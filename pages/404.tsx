import React, { Fragment } from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Page404: React.FC = () => {
  const pageTitle: string = '404';
  const description: string = 'This page does not exist.';
  const url: string = 'https://anniemusic.app';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq';
  const imageUrl: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1601396354/landing-page-assets/annie-logo_ruc0bw.png';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        description={description}
        url={url}
        imageUrl={imageUrl}
        keywords={keywords}
      />
      <Header />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 1024"
        style={{ height: '100%' }}
      >
        <path fill="#fff" d="M0 0H1440V1024H0z"></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M694.758 533.139c-24.09 2.779-42.576 2.446-55.457-.999-12.882-3.445-23.04-10.773-30.477-21.983-8.106-17.146-12.602-26.972-13.489-29.478-4.347-12.281-4.829-24.353-3.997-32.475 1.086-10.608 6.915-24.43 17.486-41.468 1.506-11.846 4.004-22.338 7.495-31.476 3.49-9.138 10.485-22.295 20.983-39.47l1.499-56.457c4.43-12.923 8.593-22.082 12.491-27.479 3.897-5.396 8.394-8.227 13.489-8.493 4.3-.408 8.297.591 11.991 2.998 3.694 2.406 10.689 8.568 20.984 18.486 8.502-14.838 18.161-26.163 28.978-33.975 10.816-7.811 25.138-13.807 42.966-17.986l2.499-4.996.301-29.388-8.295-71.535h-10.992l16.987-24.98c1.516-5.505 3.015-9.502 4.497-11.992 1.481-2.489 4.249-5.32 8.303-8.493.074-.92 3.407-1.42 10-1.5 6.593-.08 16.979.254 31.159 1 6.053 1.39 10.216 3.223 12.49 5.496 2.273 2.274 4.272 7.103 5.995 14.49L867 107l-15.363.964-1.499 47.464c-2.137 8.14-4.135 13.636-5.995 16.488-1.86 2.851-4.857 5.016-8.993 6.495l-24.481 1.498-2.998 28.978 1.999 3.997c12.503 3.574 20.997 6.405 25.48 8.494 10.767 5.015 20.506 12.277 27.978 24.981 5.232 8.893 10.646 21.179 17.987 33.974 6.463 11.264 18.287 31.083 35.472 59.454l16.987 14.989 8.494 16.987 20.484 15.488 9.493-30.976c-19.319-29.311-28.978-47.964-28.978-55.958 0-3.341 2.018-6.49 3.997-8.493 2.755-2.789 6.539-4.503 12.99-3.997 4.3.337 8.464 3.002 12.49 7.994L1030 450.203c-5.72 18.741-10.71 32.73-14.99 41.968-4.27 9.237-10.6 18.397-18.984 27.479-12.079 6.775-22.238 10.772-30.476 11.99-8.239 1.219-21.729.053-40.469-3.497-6.563-3.004-10.893-5.835-12.99-8.493-7.775-9.856-11.027-22.357-14.989-28.978-5.565-9.3-8.895-17.96-9.992-25.98l-25.98-84.436-112.413-3.497-10.492 85.435c-5.735 23.219-11.897 40.206-18.486 50.961-6.589 10.754-14.916 17.416-24.981 19.984z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M702.5 551.544c-2.035-.367-3.535-.548-4.5-.544-3.705.016-6.729-.175-8.5-3-2.463-3.929-1.797-8.595 2-14l10.5-3.5h5l36.5 1.5 11.5-1.5 40.5-1.5c4.333 2 5.833 5.833 4.5 11.5-1.333 5.667-5 9.167-11 10.5l-12 .544-81 371.411h-52c8.902-58.348 16.068-102.23 21.5-131.646 5.432-29.415 17.765-109.337 37-239.765zm127 0c-.079-1.18-3.246-1.361-9.5-.544-5.333-2.667-7.5-6.833-6.5-12.5s3.5-8.667 7.5-9l7.5 1h23l23 1.5 25.5-2.5c8 .667 12 4.333 12 11 0 3.789-1.277 5.757-3 7.5-.872.883-2.539 1.883-5 3l-8 .544 20.5 371.911h-54c-7.275-66.881-11.941-113.766-14-140.655-2.452-32.026-16.324-191.214-19-231.256z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#263E4B"
          strokeWidth="1.5"
          d="M702.5 551.044H777l-81 371.41h-52c8.902-58.348 16.068-102.23 21.5-131.645 5.432-29.416 17.765-109.337 37-239.765zm127 0H896l20.5 371.911h-54c-7.275-66.881-11.941-113.766-14-140.656-2.452-32.025-16.324-191.213-19-231.255z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#6525EC"
          fillRule="evenodd"
          d="M749 219.678l-56.373.265c-28.125.132-51.249 22.209-52.682 50.298L639 288.754c.881-9.52 2.047-16.194 3.5-20.022 2.306-6.077 4.969-9.572 8-13.515 4.582-5.962 9.772-10.992 14-12.013 9.667-2.336 20.5 5.172 32.5 22.525 2.01-3.888 3.677-6.891 5-9.01 2.642-4.232 5.455-8.801 10.5-13.515 10-9.344 22.167-17.186 36.5-23.526zM703 529.52c5.143 1.876 14.81 2.711 29 2.503 7.727-.113 21.636-2.42 33.5-3.004 6.616-.325 16.616-.325 30 0l11.5-30.533h11l3.5 30.533c11.701.732 20.034 1.233 25 1.502 10.679.579 19.562 1.001 26.5 1.001 11.778 0 20.444-.834 26-2.503l-25.5-142.657-118.5 4.505c-1.549 21.723-7.215 45.583-17 71.579-2.085 5.54-2.419 12.543-4.5 19.521-3.172 10.634-6.665 20.918-10.5 28.031-3.638 6.748-10.305 13.255-20 19.522z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M898.21 529.352l-11.449-66.779a.75.75 0 111.478-.254l11.393 66.45h1.618c6.351 0 11.5 5.154 11.5 11.513 0 6.358-5.149 11.513-11.5 11.513h-78.896c-5.63 0-10.194-4.57-10.194-10.207 0-.471.032-.943.097-1.41l.599-4.298a8.858 8.858 0 017.326-7.518l-2.862-29.126h-9.801l-10.991 29.183a6.483 6.483 0 014.871 7.643l-.915 4.374a14.273 14.273 0 01-13.967 11.359h-91.469c-4.215 0-7.632-3.421-7.632-7.641 0-.798.125-1.592.371-2.351.667-2.064 1.499-4.73 2.496-7.998a.75.75 0 111.434.439 528.275 528.275 0 01-2.503 8.021 6.135 6.135 0 005.834 8.028h91.469a12.773 12.773 0 0012.499-10.165l.915-4.374a4.978 4.978 0 00-4.468-5.984c-6.204-.122-10.594-.184-13.165-.187-6.961-.008-26.591 1.132-30.698 1.682-9.323 1.249-14.26 1.429-22.324 1.157l-.525-.018c-2.881-.097-4.259-.131-6.097-.131-6.67 0-11.652-.168-14.959-.504-3.88-.396-5.637-.949-5.438-2.355l1.486.212a.376.376 0 00-.035-.227c.105.081.321.181.639.281.736.231 1.909.432 3.5.595 3.245.33 8.184.496 14.807.496 1.86 0 3.251.034 6.148.133l.524.017c7.986.27 12.842.093 22.075-1.144 4.178-.56 23.874-1.704 30.899-1.696 2.512.003 6.74.062 12.685.177l11.313-30.037a.75.75 0 01.702-.486h17.5a.75.75 0 010 1.501h-5.672l2.869 29.209c3.312.547 9.929.825 19.803.825 3.712 0 21.852 1.014 27.07 1.505 5.946.559 15.835.086 29.64-1.423zm.818.919l.055.496c-14.27 1.581-24.478 2.084-30.653 1.503-5.175-.487-23.27-1.499-26.93-1.499-10.558 0-17.421-.314-20.645-.952l.006-.033a7.353 7.353 0 00-6.519 6.301l-.599 4.299a8.63 8.63 0 00-.083 1.202c0 4.808 3.892 8.705 8.694 8.705h78.896c5.523 0 10-4.482 10-10.011 0-5.529-4.477-10.011-10-10.011h-2.222z"
        ></path>
        <path
          fill="#263E4B"
          d="M811.713 179.884l-2.911 30.764c23.701 8.064 38.855 15.067 45.522 21.07 8.644 7.784 30.803 52.77 42.159 82.294 3.429 8.917 8.745 14.565 21.645 25.018l1.085.879c12.955 10.498 18.25 16.166 21.492 25.175 5.006 13.909 15.022 17.251 30.48 10.085a.75.75 0 01.63 1.362c-16.214 7.517-27.198 3.852-32.521-10.938-3.118-8.664-8.279-14.188-21.024-24.517l-1.085-.879c-13.1-10.615-18.547-16.401-22.102-25.645-11.257-29.265-33.37-74.161-41.763-81.718-6.518-5.869-21.726-12.874-45.561-20.955a.75.75 0 01-.506-.782l2.953-31.213H801.5a.751.751 0 010-1.502h26.194c10.32 0 16.307-4.201 19.432-12.69 2.512-6.822 3.124-14.707 3.124-31.563v-11.481-.579c.008-5.582-.25-8.797-1.446-13.701a2.897 2.897 0 00-.103-.107c-.117-.117-.28-.27-.487-.457h-71.507a.75.75 0 010-1.502H848.5c.183 0 .36.067.497.189.885.785 1.149 1.048 1.231 1.384 1.259 5.121 1.53 8.452 1.522 14.195v12.059c0 17.046-.619 25.03-3.216 32.082-3.343 9.078-9.89 13.673-20.84 13.673h-15.981zm219.067 269.335l1.44.424c-12.56 42.715-25.91 67.614-40.19 74.742-22.485 11.22-49.98 12.083-72.361 1.094-2.957-1.452-5.279-3.481-7.636-6.598-1.68-2.222-3.337-4.896-5.983-9.537-.692-1.214-3.33-5.89-3.719-6.576a544.801 544.801 0 00-4.615-8.005c-2.09-3.552-5.057-11.395-8.931-23.58l1.429-.456c3.839 12.077 6.781 19.852 8.795 23.274a552.99 552.99 0 014.627 8.026c.39.689 3.027 5.362 3.717 6.573 2.615 4.588 4.246 7.219 5.876 9.375 2.223 2.94 4.368 4.814 7.101 6.156 21.946 10.776 48.951 9.928 71.031-1.09 13.779-6.875 26.969-31.497 39.419-73.822z"
        ></path>
        <path
          fill="#6525EC"
          fillRule="evenodd"
          d="M825 217.675l9 3.504c6.333 19.355 11.167 35.873 14.5 49.555 3.333 13.682 5.5 34.038 6.5 61.068l-12.5-3.504c1-21.691-.833-40.879-5.5-57.564-2.033-7.267-6.033-24.953-12-53.059zm-76.5 2.003l8.5-3.504c2 14.794 3 26.474 3 35.039v26.028l-13 18.521c2-6.007 3-19.522 3-40.545 0-21.023-.5-32.87-1.5-35.539z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M824.767 217.832l-.289-1.36 10.625 4.136.11.338c6.339 19.372 11.177 35.908 14.516 49.61 3.348 13.741 5.519 34.142 6.521 61.218l.038 1.028-14.065-3.942.028-.597c.996-21.614-.829-40.723-5.473-57.326-2.039-7.289-6.04-24.983-12.011-53.105zm13.455 52.7c4.647 16.614 6.497 35.682 5.554 57.204l10.936 3.065c-1.015-26.472-3.164-46.44-6.44-59.889-3.309-13.581-8.101-29.969-14.374-49.161l-7.375-2.872c5.804 27.3 9.706 44.525 11.699 51.653zm-89.924-50.59l-.255-.681 10.07-4.152.13.964c2.005 14.825 3.007 26.535 3.007 35.14v26.266l-16.081 22.91 1.62-4.864c1.965-5.902 2.961-19.369 2.961-40.308 0-20.857-.501-32.737-1.452-35.275zm2.952 35.275c0 17.358-.678 29.614-2.051 36.819l10.551-15.032v-25.791c0-8.34-.954-19.667-2.864-33.974l-6.976 2.876c.907 3.759 1.34 15.361 1.34 35.102z"
        ></path>
        <path
          fill="#263E4B"
          d="M810.781 219.891l1.438-.427 68.018 229.826c3.887 20.314 17.896 30.425 42.263 30.425 24.378 0 44.421-16.291 60.15-49.015l1.351.651c-15.956 33.196-36.464 49.866-61.501 49.866-25.049 0-39.706-10.579-43.719-31.572l-68-229.754zm36.978 185.878l1.482.229c-7.718 50.055-22.226 75.219-43.741 75.219-17.407 0-28.989-54.216-33.749-157.89-.898-19.549-1.398-52.928-1.501-100.144l1.5-.003c.103 47.195.603 80.557 1.499 100.078 4.699 102.324 16.263 156.457 32.251 156.457 20.485 0 34.643-24.558 42.259-73.946z"
        ></path>
        <path
          fill="#263E4B"
          fillRule="evenodd"
          d="M922.478 381.147l52.391-5.507 3.099 29.484-52.391 5.506-3.099-29.483zm-48.593-52.855l-4.923-46.845c1.975-5.066 7.18-8.042 15.614-8.928 8.434-.886 14.144.942 17.13 5.486l4.923 46.846-32.744 3.441zm137.525-14.454l-32.743 3.441-4.924-46.845c1.976-5.066 7.18-8.042 15.615-8.928 8.434-.886 14.142.942 17.132 5.486l4.92 46.846z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M869.771 380.309l-7.609-72.397c3.188-7.843 11.53-12.473 25.025-13.892 13.494-1.418 22.616 1.377 27.366 8.385l7.609 72.398-52.391 5.506zm157.169-16.519l-52.388 5.506-7.609-72.397c3.189-7.843 11.53-12.473 25.025-13.892 13.492-1.418 22.612 1.377 27.362 8.385l7.61 72.398z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="#263E4B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M869.442 380.511l-7.61-72.397c3.189-7.843 11.53-12.473 25.025-13.892 13.494-1.418 22.617 1.377 27.366 8.385l7.609 72.398-52.39 5.506zm157.168-16.519l-52.387 5.507-7.609-72.398c3.188-7.843 11.53-12.473 25.024-13.892 13.492-1.418 22.612 1.377 27.362 8.385l7.61 72.398z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M868.156 460.551l-8.803-83.755c4.554-9.163 16.109-14.72 34.664-16.671 18.555-1.95 31.013 1.083 37.373 9.1l8.803 83.754-72.037 7.572zm176.814-18.585l-72.033 7.572-8.803-83.755c4.555-9.163 16.109-14.72 34.664-16.671 18.552-1.95 31.012 1.083 37.372 9.1l8.8 83.754z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M868.003 461.322a.75.75 0 01-.824-.668l-8.803-83.754a.745.745 0 01.075-.413c4.693-9.444 16.473-15.109 35.257-17.084 18.784-1.974 31.484 1.119 38.038 9.38a.749.749 0 01.159.388l8.803 83.755a.75.75 0 01-.667.825l-72.038 7.571zm71.135-8.986l-8.702-82.788c-6.208-7.646-18.378-10.563-36.571-8.651-18.193 1.912-29.491 7.296-33.974 16.065l8.701 82.788 70.546-7.414zm106.352-10.423a.756.756 0 01-.67.825l-72.035 7.571a.75.75 0 01-.825-.668l-8.803-83.754a.754.754 0 01.075-.413c4.693-9.444 16.474-15.109 35.257-17.083 18.781-1.975 31.481 1.118 38.041 9.379.09.112.14.246.16.388l8.8 83.755zm-1.57-.59l-8.7-82.788c-6.21-7.646-18.38-10.563-36.574-8.651-18.193 1.912-29.49 7.296-33.974 16.065l8.702 82.788 70.546-7.414z"
        ></path>
        <path
          fill="#263E4B"
          fillRule="evenodd"
          d="M905.235 469.074c-19.893 2.091-36.597-1.714-37.31-8.499-.713-6.784 14.835-13.979 34.727-16.07 19.893-2.091 36.597 1.714 37.31 8.499.713 6.784-14.835 13.979-34.727 16.07zm104.785-11.013c-19.896 2.091-36.601-1.714-37.314-8.499-.713-6.784 14.835-13.979 34.724-16.07 19.9-2.091 36.6 1.714 37.31 8.499.72 6.784-14.83 13.979-34.72 16.07z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M850.217 394.465c6.29-.661 10.852-6.298 10.191-12.59-.662-6.293-6.296-10.858-12.586-10.197-6.289.661-10.851 6.298-10.19 12.59.661 6.293 6.296 10.858 12.585 10.197zm-.157-1.493c-5.465.574-10.361-3.393-10.936-8.86-.575-5.468 3.39-10.366 8.855-10.94 5.466-.575 10.362 3.392 10.937 8.859.574 5.468-3.39 10.366-8.856 10.941zM610.14 406.854l10.104-3.678a.75.75 0 11.512 1.411l-8.983 3.27 9.109 5.389a.75.75 0 11-.763 1.293l-10.172-6.017-.191.069a.738.738 0 01-.268.046c-18.363 24.481-22.61 48.632-12.794 72.545 9.569 23.311 13.87 31.631 21.12 38.812 8.358 8.279 19.868 12.582 39.769 14.787 37.529 4.157 59.448-8.293 69.21-36.044 6.099-17.339 9.588-29.48 10.463-36.385a.75.75 0 111.488.189c-.892 7.041-4.403 19.26-10.536 36.695-10.004 28.437-32.594 41.269-70.79 37.037-20.206-2.239-32.021-6.655-40.659-15.211-7.448-7.378-11.801-15.798-21.453-39.309-10.083-24.563-5.635-49.402 13.289-74.425 2.037-25.406 11.249-49.186 27.628-71.325 16.329-22.072 33.156-38.665 50.489-49.776 11.714-31.072 28.723-51.881 51.034-62.381 11.116-5.231 19.459-8.708 25.043-10.435 3.74-1.157 6.402-1.582 7.891-1.113l2.571-47.221a.753.753 0 01.79-.711.752.752 0 01.708.792l-2.674 49.124c-.053.973-1.499.933-1.499-.041 0-.919-2.315-.95-7.344.605-5.503 1.701-13.79 5.155-24.848 10.359-21.98 10.344-38.767 30.924-50.356 61.785a.753.753 0 01-.299.369c-17.239 11.004-34.008 27.515-50.301 49.538-16.087 21.745-25.18 45.06-27.288 69.957z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M771.5 208.165l-7.025 17.788a2 2 0 002.395 2.662l30.003-8.324 19.856 7.073a2 2 0 002.288-3.061L808 209.166c-2.043 1.78-6.421 2.67-13.133 2.67-6.712 0-14.501-1.224-23.367-3.671z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M796.406 220.838l-28.835 8a2.754 2.754 0 01-3.292-3.665l7.024-17.785a.749.749 0 01.896-.447c8.806 2.43 16.53 3.643 23.168 3.643 6.542 0 10.775-.86 12.641-2.485a.75.75 0 011.098.124l11.013 15.132a2.75 2.75 0 01-3.144 4.215l-19.066-6.792.117 1.004c.188 1.628.469 4.153.845 7.575.75 6.841 1.875 17.27 3.375 31.286a.751.751 0 11-1.492.16c-1.5-14.015-2.625-24.442-3.375-31.282-.374-3.42-.656-5.942-.843-7.567l-.13-1.116zm-.019-8.759c.165.644.322 1.36.472 2.143a77.94 77.94 0 01.664 4.122l.096.685.008.055 19.851 7.071a1.252 1.252 0 001.429-1.916l-10.564-14.514c-2.265 1.51-6.238 2.274-11.956 2.354zm-.237 7.272l-.016-.112-.096-.687a76.794 76.794 0 00-.652-4.046 32.797 32.797 0 00-.549-2.422c-6.497-.061-13.958-1.235-22.387-3.518l-6.776 17.159a1.252 1.252 0 001.497 1.666l28.979-8.04z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M694 380.003c41.492-66.209 65.325-102.749 71.5-109.621 4.819-5.363 13.073-5.804 18.437-.985a13.057 13.057 0 013.476 14.354L772.5 322.94"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M694.461 380.754c41.445-66.133 65.293-102.696 71.422-109.518 4.545-5.057 12.324-5.469 17.376-.92a12.327 12.327 0 013.27 13.543l-14.904 39.166 1.402.535 14.903-39.166a13.83 13.83 0 00-3.667-15.194c-5.668-5.104-14.396-4.642-19.495 1.032-6.22 6.922-30.038 43.439-71.578 109.724l1.271.798z"
        ></path>
        <path
          fill="#263E4B"
          fillRule="evenodd"
          d="M786.682 136.615a12.97 12.97 0 00-3.682-.53c-7.18 0-13 5.827-13 13.015 0 6.107 4.202 11.231 9.869 12.634l-.588 12.11a6 6 0 01-6.077 5.708l-15.43-.216a11.037 11.037 0 01-2.923-.438c-5.832-1.7-9.183-7.805-7.484-13.638l16.958-58.207h2.008l.008-.011 2.352.011h8.807l.002.043 20.917.1c-2.415 11.108-4.584 18.531-6.507 22.269a28.123 28.123 0 01-5.23 7.15zm71.064-29.562c1.969 8.343-1.078 12.514-9.141 12.514-8.062 0-20.155-4.171-36.28-12.514h45.421z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M672.687 397.476l67.892-60.494a53.002 53.002 0 0135.941-13.425l77.306.995c10.56.136 19.191 8.464 19.704 19.013.486 9.983-7.214 18.47-17.198 18.956a17.2 17.2 0 01-.681.02l-65.45.716a7.251 7.251 0 00-7.171 7.33v.008a7.55 7.55 0 007.343 7.456l67.558 1.852c9.205.252 16.551 7.762 16.599 16.971.048 9.074-7.27 16.47-16.344 16.518h-64.485a7.172 7.172 0 00-7.171 7.172v.086a10.333 10.333 0 006.944 9.638l41.236 14.316c7.136 2.477 10.912 10.27 8.435 17.405-.11.317-.232.63-.365.938-3.301 7.644-11.903 11.49-19.802 8.855l-67.035-22.37-36.267 24.205c-18.6 12.413-43.741 7.398-56.154-11.201a40.489 40.489 0 01-3.079-5.496c-3.159-6.837-4.144-16.633-2.956-29.387a46.002 46.002 0 0115.2-30.077z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M669.986 468.57l12.646-8.138c-4.339-4.148-7.843-9.244-10.803-15.169-4.289-8.589-2.879-25.011 4.15-49.373l-2.395 2.134a45.317 45.317 0 00-14.972 29.648c-1.17 12.61-.196 22.264 2.894 28.953a39.906 39.906 0 003.004 5.368 39.898 39.898 0 005.476 6.577zm1.135 1.055c13.179 11.781 33.114 13.67 48.499 3.402l3.499-2.336c-13.903 2.514-25.212.462-34.274-5.36a41.003 41.003 0 01-5.072-3.848l-12.652 8.142zm5.657-76.458l.003-.012a.752.752 0 01.602-.527l63.085-56.211a53.715 53.715 0 0136.427-13.611l77.344.996c10.945.141 19.891 8.782 20.423 19.726.505 10.397-7.504 19.236-17.89 19.743-.236.011-.473.018-.709.021l-65.479.716a6.495 6.495 0 00-6.421 6.57v.008a6.796 6.796 0 006.605 6.715l67.584 1.852c9.6.263 17.26 8.103 17.311 17.717.05 9.489-7.594 17.222-17.073 17.273H794.076a6.418 6.418 0 00-6.413 6.498 9.579 9.579 0 006.433 8.936l41.254 14.321c7.515 2.609 11.495 10.824 8.889 18.348-.117.338-.246.671-.388.999-3.456 8.003-12.453 12.03-20.716 9.273l-66.699-22.258-35.984 24.016c-18.951 12.648-44.556 7.522-57.19-11.45a41.34 41.34 0 01-3.117-5.571c-3.22-6.968-4.219-16.872-3.026-29.722a46.82 46.82 0 0115.467-30.631l4.192-3.735zm1.315.838c-7.506 25.285-9.118 42.186-4.922 50.586 4.146 8.302 9.368 14.904 16.484 19.476 9.264 5.952 20.991 7.822 35.687 4.653a.75.75 0 01.571.107l30.302-20.224 67.395 22.49c7.524 2.511 15.717-1.156 18.864-8.444.127-.294.243-.592.348-.895 2.335-6.74-1.231-14.1-7.964-16.437l-41.253-14.321a11.082 11.082 0 01-7.442-10.337l-.001-.095c0-4.376 3.543-7.923 7.914-7.923h64.507c8.65-.046 15.625-7.103 15.58-15.763-.047-8.804-7.061-15.983-15.852-16.224l-67.584-1.852a8.296 8.296 0 01-8.064-8.198v-.009c-.049-4.419 3.491-8.04 7.904-8.089l65.479-.716c.218-.002.436-.009.653-.019 9.559-.466 16.93-8.601 16.465-18.17-.494-10.152-8.792-18.167-18.944-18.298l-77.345-.995a52.217 52.217 0 00-35.41 13.23l-63.372 56.467z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M1011.08 342.03l.01 2.035c.05 10.381 8.47 18.771 18.86 18.771h14.22c-11.75.904-19.42 4.742-23 11.513-5.63 10.664-1.55 23.875 9.12 29.508a21.808 21.808 0 0010.19 2.527h6.19l-1.69.83c-11.89 5.839-16.81 20.216-10.97 32.113.35.718.74 1.417 1.16 2.096 5.69 7.918 16.72 9.728 24.63 4.043.53-.379 1.04-.788 1.52-1.224l11.04-9.945a23.986 23.986 0 007.6-21.808c-.09-.589-.19-1.122-.29-1.6-.57-2.918-2.57-7.256-6-13.014 2.34-4.672 3-10.345 2-17.019-1-6.674-3.83-12.514-8.5-17.519 2.28-5.827 2.61-12.334 1-19.522-.63-2.846-1.51-5.272-2.64-7.277a12.983 12.983 0 00-9.98-6.565l-27.91-2.931c-8.24-.865-15.62 5.113-16.48 13.352-.06.543-.08 1.089-.08 1.636z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M1046.88 405.132l26.59-8.378c2.14-4.469 2.75-9.893 1.79-16.288-.98-6.505-3.73-12.192-8.27-17.078v.198l-23.05-.452c-11.17.97-18.4 4.673-21.78 11.065-5.43 10.292-1.51 23.047 8.78 28.489a21.026 21.026 0 009.84 2.444h6.1zm.4 1.45l-1.66.812c-11.5 5.647-16.26 19.564-10.62 31.084.35.701.72 1.384 1.11 2.006 5.45 7.589 16.01 9.32 23.59 3.865.5-.361.98-.75 1.44-1.163l11.03-9.936a23.26 23.26 0 007.37-21.173c-.09-.568-.19-1.083-.28-1.543-.53-2.728-2.4-6.83-5.6-12.265l-26.38 8.313zm-2.78-44.939l22.48.441c2.05-5.558 2.32-11.755.79-18.606-.62-2.775-1.48-5.13-2.56-7.066a12.255 12.255 0 00-9.41-6.193l-27.91-2.931c-7.83-.822-14.84 4.864-15.66 12.7-.05.516-.08 1.035-.08 1.554l.01 2.019c.05 9.968 8.13 18.023 18.09 18.023h14.25v.059zm-23.66 11.854c2.67-5.055 7.5-8.519 14.46-10.411h-5.05c-10.78 0-19.54-8.724-19.59-19.518l-.01-2.019c0-.574.03-1.147.09-1.718.91-8.661 8.66-14.945 17.31-14.037l27.91 2.931c4.44.466 8.37 3.058 10.56 6.952 1.16 2.071 2.06 4.563 2.71 7.473 1.6 7.149 1.31 13.66-.86 19.519 4.58 5.039 7.37 10.903 8.37 17.575 1 6.644.37 12.347-1.89 17.095 3.34 5.653 5.3 9.941 5.89 12.904.09.475.19 1.003.28 1.584a24.784 24.784 0 01-7.85 22.539l-11.02 9.936c-.5.45-1.03.873-1.57 1.266-8.26 5.939-19.76 4.055-25.72-4.249-.44-.706-.84-1.434-1.2-2.18-5.82-11.882-1.25-26.159 10.18-32.505h-3.06c-3.68 0-7.3-.899-10.55-2.619-11.01-5.829-15.22-19.493-9.39-30.518zm9.39-42.212c.41-.006.75.326.76.74 0 .415-.33.756-.74.762-5.53.078-7.98 3.385-7.51 10.312.48 6.957 2.94 10.079 7.45 9.764.42-.029.77.283.8.697a.747.747 0 01-.69.801c-5.49.384-8.53-3.469-9.05-11.16-.53-7.722 2.51-11.824 8.98-11.916zm7.17 42.817c.41-.035.77.272.81.685a.753.753 0 01-.69.811c-5.51.464-7.72 3.934-6.77 10.81.96 6.907 3.64 9.85 8.12 9.221a.74.74 0 01.84.639.75.75 0 01-.64.848c-5.44.766-8.74-2.866-9.8-10.501-1.07-7.667 1.68-11.971 8.13-12.513zm10.51 43.785c.41-.085.8.175.89.581a.759.759 0 01-.58.889c-5.41 1.131-7.19 4.846-5.4 11.554 1.79 6.739 4.8 9.334 9.17 8.164.4-.107.81.131.92.531a.748.748 0 01-.53.919c-5.31 1.424-9.03-1.778-11.01-9.227-2-7.48.21-12.087 6.54-13.411z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M398.221 552.239L422.5 805.797H435l-11.905-256c-.312-6.718-6.011-11.91-12.729-11.598-.206.01-.411.024-.616.044-7.045.687-12.204 6.949-11.529 13.996z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M397.474 551.838l24.344 254.237h13.968L423.844 549.29c-.331-7.132-6.381-12.644-13.513-12.312-.218.01-.436.025-.654.047-7.457.727-12.917 7.355-12.203 14.813zm25.708 252.737l-24.214-252.88c-.636-6.635 4.221-12.531 10.855-13.177.192-.019.385-.033.578-.042 6.304-.293 11.652 4.579 11.945 10.883l11.868 255.216h-11.032z"
        ></path>
        <path
          fill="#263E4B"
          d="M416.373 813.117a.75.75 0 01-1.388-.568c9.895-24.194 15.655-41.099 17.276-50.674a.749.749 0 111.479.25c-1.645 9.717-7.432 26.7-17.367 50.992zm15.338-84.653a.75.75 0 11-1.422.477c-4.404-13.133-13.301-24.337-26.716-33.622a.75.75 0 01.854-1.233c13.67 9.462 22.773 20.924 27.284 34.378zm-10.76 53.181a.75.75 0 01-1.366-.619c1.338-2.953 2.234-5.357 2.687-7.205 6.225-25.381 2.366-43.929-8.655-57.113a.749.749 0 111.151-.962c11.335 13.56 15.296 32.599 8.96 58.433-.478 1.951-1.404 4.436-2.777 7.466zm-17.679-241.802a.75.75 0 111.488-.19c6.499 50.948 30.889 77.891 73.275 81.054a.75.75 0 01-.112 1.496c-43.148-3.22-68.067-30.747-74.651-82.36zm10.981-.772a.75.75 0 011.494-.142c4.26 44.862 24.54 68.251 60.976 70.932a.75.75 0 01-.11 1.496c-37.222-2.739-58.035-26.742-62.36-72.286z"
        ></path>
        <path
          fill="#263E4B"
          fillRule="evenodd"
          d="M813.5 141.091c-1.933 0-3.5-1.793-3.5-4.005 0-2.211 1.567-4.004 3.5-4.004s3.5 1.793 3.5 4.004c0 2.212-1.567 4.005-3.5 4.005zm31 0c-1.933 0-3.5-1.793-3.5-4.005 0-2.211 1.567-4.004 3.5-4.004s3.5 1.793 3.5 4.004c0 2.212-1.567 4.005-3.5 4.005zm-37.928-7.524a.749.749 0 11-1.144-.97c.119-.141.334-.376.633-.674a16.153 16.153 0 011.664-1.443c1.779-1.341 3.639-2.153 5.516-2.153 2.716 0 4.203.649 5.704 2.298.237.26.477.545.792.934.093.114.665.828.845 1.049a.752.752 0 01-.108 1.056.749.749 0 01-1.055-.108c-.184-.225-.758-.941-.847-1.051a20.279 20.279 0 00-.736-.869c-1.215-1.334-2.299-1.808-4.595-1.808-1.494 0-3.072.689-4.614 1.852-.553.416-1.06.863-1.509 1.309a10.74 10.74 0 00-.546.578zm32.018-.021a.75.75 0 01-1.18-.928c.111-.141.311-.377.59-.675.461-.493.98-.985 1.548-1.447 1.663-1.349 3.407-2.169 5.176-2.169 2.549 0 3.951.66 5.354 2.319.22.26.443.545.736.934.086.115.618.829.784 1.049a.751.751 0 01-1.196.906l-.786-1.051a19.36 19.36 0 00-.683-.868c-1.119-1.324-2.104-1.788-4.209-1.788-1.361 0-2.81.682-4.232 1.835-.511.415-.98.861-1.397 1.306a9.74 9.74 0 00-.505.577zm-5.264 13.802h5.903l-6.602-16.997a.75.75 0 111.398-.545l7 18.02a.75.75 0 01-.699 1.023h-7a.75.75 0 110-1.501zm-3.646 10.422a.75.75 0 01-.709-1.323c2.717-1.457 5.334-1.457 7.746.021a.75.75 0 01-.783 1.281c-1.943-1.191-3.993-1.191-6.254.021z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M278 597.553l40 123.636 197.5-26.529V550l-195.109 39.065L318 606.062l-12.796-13.956L278 597.553z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M305.757 591.141a.752.752 0 00-.7-.229l-27.204 5.447a.75.75 0 00-.567.967l40 123.636a.752.752 0 00.814.513l197.5-26.53a.75.75 0 00.65-.743v-144.66a.75.75 0 00-.897-.735l-195.109 39.065a.748.748 0 00-.596.631l-2.169 15.423-11.722-12.785zm-.82 1.325l12.51 13.645a.75.75 0 001.296-.402l2.316-16.471 193.691-38.781v143.089l-196.229 26.359-39.548-122.24 25.964-5.199z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M234 941.714h66.5c26.194-68.248 50.243-110.858 72.148-127.831 1.294-1.002-6.422-12.118-23.148-33.347 10.842 8.582 18.342 14.088 22.5 16.518 1.958 1.144 2.125-15.207.5-49.054l17.904 54.257c6.817-3.426 12.015-5.828 15.596-7.205 50.333-19.355 91.667 29.533 124 146.662h676"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M371.622 797.463c.713.417 1.357.03 1.708-.721.228-.487.403-1.226.546-2.245.271-1.94.426-4.962.468-9.079.074-7.286-.206-18.026-.841-32.224l16.189 49.06c.144.434.64.64 1.049.435 6.796-3.417 11.975-5.809 15.528-7.176 49.742-19.127 90.779 29.411 123.008 146.162a.75.75 0 00.723.55h676c.41 0 .75-.336.75-.75s-.34-.75-.75-.75H530.571c-32.416-117.111-73.994-166.164-124.84-146.612-3.471 1.335-8.43 3.616-14.887 6.846l-17.632-53.433c-.273-.829-1.503-.601-1.461.271.812 16.91 1.176 29.447 1.093 37.605-.042 4.059-.194 7.026-.454 8.887-.107.764-.231 1.328-.359 1.673-4.185-2.505-11.549-7.928-22.066-16.253-.697-.552-1.605.354-1.054 1.052 8.354 10.604 14.457 18.68 18.304 24.222 1.913 2.757 3.265 4.882 4.051 6.365.378.712.618 1.265.721 1.643.02.074.033.136.041.185-21.952 17.125-45.938 59.625-72.043 127.549H234a.75.75 0 000 1.5h66.5a.749.749 0 00.7-.481c26.147-68.125 50.144-110.644 71.907-127.507 1.23-.952-.276-3.794-4.66-10.109-3.252-4.685-8.094-11.153-14.527-19.408 8.269 6.431 14.164 10.676 17.702 12.743zM821.226 59.25h-28.405c-12.761 0-23.122 10.294-23.249 23.04l-16.863 24.335a.751.751 0 00.616 1.179h114c.662 0 1-.795.54-1.272L843.474 81.22c-.163-12.161-10.061-21.97-22.248-21.97zm-50.288 23.704a.751.751 0 00.133-.428c0-12.025 9.738-21.774 21.75-21.774h28.405c11.46 0 20.75 9.3 20.75 20.773 0 .195.076.381.211.521l23.373 24.256H754.759l16.179-23.348z"
        ></path>
        <path
          fill="#6525EC"
          fillRule="evenodd"
          d="M842.419 82.026L770 83.027l-5 7.508h85.5l-8.081-8.51z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#6525EC"
          d="M842.909 80.775l-72.419 1a.75.75 0 00-.614.335l-5 7.508a.75.75 0 00.624 1.168H851c.659 0 .998-.79.544-1.269l-8.081-8.509a.75.75 0 00-.554-.233zm6.343 8.509h-82.35l4.003-6.012 71.697-.991 6.65 7.003z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M639.5 921.954l-8.5 41.045h161c-7.382-15.594-16.048-26.439-26-32.536-9.952-6.096-28.118-8.933-54.5-8.509l13.5-70.078-81 .501-1 52.558-3.5 17.019zM857 915.947V963.5l20-.501h128c-7.382-15.594-16.048-26.439-26-32.536-9.952-6.096-28.118-8.933-54.5-8.509L937 853l-87.5-.623 6.5 52.558 1 11.012z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#6525EC"
          fillRule="evenodd"
          d="M643 905.436c7.656 1.239 13.656 6.078 18 14.516 4.344 8.437 6.678 19.783 7 34.037l-35-.5M857 905.436c13.656 3.242 22.656 9.081 27 17.519 4.344 8.437 6.344 18.782 6 31.034l-33-.5v-48.053z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M667.872 851.98l5.568-38.397H661.5v-1.5h12.157l2.976-20.524H666v-1.5h58v1.5h-11.626l-3.803 20.524H719.5v1.5h-11.207l-7.076 38.191 24.692-.153-11.06 57.413 3.82-10.474a7.758 7.758 0 0111.214-4.033 6.85 6.85 0 011.075 11.036l-17.777 15.743c3.346-.832 11.561-2.944 23.63-6.085a.75.75 0 01.378 1.452 4120.12 4120.12 0 01-19.317 4.993c23.086.105 39.247 2.977 48.52 8.658 10.091 6.182 18.847 17.139 26.286 32.855l.507 1.07H630.079l8.686-41.946 3.487-16.951 1.012-53.22 24.608-.152zm1.517-.01l14.505-.089 5.862-38.298h-14.8l-5.567 38.387zm16.024-.099l14.277-.088 7.078-38.2h-15.495l-5.86 38.288zm26.723 71.324a.77.77 0 01-.198.011l-16.916.498a.75.75 0 01-.044-1.499l15.107-.445-18.289-16.197a6.85 6.85 0 011.074-11.036 7.758 7.758 0 0111.215 4.033l7.292 19.996.234-.642 12.48-64.782-79.355.491-.975 51.25c15.57 4.628 24.495 20.65 24.978 47.865h116.632c-5.905-9.64-12.495-16.683-19.763-21.135-9.72-5.955-27.56-8.776-53.472-8.408zm.925-4.88l-.254 1.318 17.156-15.193a5.35 5.35 0 00-.839-8.619 6.258 6.258 0 00-9.046 3.253l-7.017 19.241zm73.211 35.923H633.684l-1.763 8.511H790.81a118.579 118.579 0 00-4.538-8.511zm-152.278-1.5h33.245c-.475-26.472-9.006-41.857-23.668-46.355l-3.337 16.223-6.24 30.132zm68.682-53.664a6.258 6.258 0 00-9.046-3.253 5.349 5.349 0 00-.839 8.619l17.49 15.49-7.605-20.856zm8.172-107.515h-16.204l-3.141 20.524h15.543l3.802-20.524zm-17.721 0h-14.978l-2.976 20.524h14.812l3.142-20.524z"
        ></path>
        <path
          fill="#6525EC"
          fillRule="evenodd"
          d="M636.5 317.786H620l18-28.531"
          clipRule="evenodd"
        ></path>
        <path
          fill="#263E4B"
          d="M867.076 851.727l-5.531-38.144H852v-1.5h9.327l-2.976-20.524H849v-1.5h60.5v1.5h-12.921l2.067 20.524H910v1.5h-11.203l3.862 38.348 35.231.201-11.406 66.129 7.185-19.701a7.758 7.758 0 0111.214-4.033 6.85 6.85 0 011.075 11.036l-16.981 15.038c4.23-1.075 11.34-2.909 20.834-5.38a.75.75 0 01.378 1.452 4074.544 4074.544 0 01-19.31 4.991c23.349.067 39.674 2.939 49.013 8.66 10.091 6.182 18.847 17.139 26.288 32.855l.5 1.07H856.257l-.007-.743-.493-57.973-7.113-53.911 18.432.105zm1.516.009l15.062.086-3.389-38.239H863.06l5.532 38.153zm16.568.095l15.99.091-3.86-38.339h-15.519l3.389 38.248zm-28.006 52.87c21.722 4.377 32.934 20.466 33.581 48.037h108.136c-5.905-9.64-12.495-16.683-19.763-21.135-9.685-5.934-27.43-8.755-53.191-8.412a.73.73 0 01-.298.004l-.535.008a.711.711 0 01-.146.003l-16.916.498a.75.75 0 01-.044-1.499l15.107-.445-18.289-16.197a6.85 6.85 0 011.075-11.036 7.757 7.757 0 0111.214 4.033l7.655 20.991 11.371-65.929-85.755-.49 6.798 51.569zm.103 1.553l.4 46.484h31.578c-.635-26.725-11.277-42.145-31.978-46.484zm142.515 47.984H857.67l.074 8.511h146.566c-1.46-3.023-2.98-5.86-4.538-8.511zm-84.096-55.164a6.258 6.258 0 00-9.046-3.253 5.349 5.349 0 00-.839 8.619l17.49 15.49-7.605-20.856zm19.402 0l-7.606 20.856 17.491-15.49a5.35 5.35 0 00-.839-8.619 6.258 6.258 0 00-9.046 3.253zm-40.006-107.515H879.82l1.818 20.524h15.501l-2.067-20.524zm-16.758 0h-18.447l2.976 20.524h17.289l-1.818-20.524z"
        ></path>
        <path
          fill="#6525EC"
          d="M379.158 651.096l1.476 9.318-8.574 1.358 1.107 6.989-11.022 1.745-1.107-6.988-30.251 4.791-1.476-9.318 26.037-31.398 11.023-1.746 4.214 26.607 8.573-1.358zm-37.967 6.013l18.371-2.91-2.466-15.571-15.905 18.481zm68.632 6.474c-17.024 2.697-26.35-3.87-28.612-18.154-2.253-14.223 4.597-23.289 21.621-25.985 16.962-2.686 26.35 3.871 28.593 18.032 2.252 14.223-4.64 23.421-21.602 26.107zm-1.466-9.257c9.675-1.532 13.317-7.073 12.045-15.104-1.262-7.97-6.429-12.053-16.104-10.521-9.675 1.533-13.337 6.951-12.065 14.982 1.282 8.092 6.448 12.176 16.124 10.643zm77.353-20.106l1.475 9.318-8.573 1.358 1.107 6.988-11.022 1.746-1.107-6.988-30.251 4.791-1.476-9.318 26.037-31.398 11.022-1.746 4.214 26.606 8.574-1.357zm-37.967 6.013l18.371-2.91-2.466-15.571-15.905 18.481z"
        ></path>
        <path
          fill="#263E4B"
          d="M380.26 649.745l1.711 10.8-8.573 1.358 1.107 6.989-12.504 1.98-1.107-6.989-30.251 4.792-1.647-10.394 26.434-31.876 12.043-1.908 4.214 26.606 8.573-1.358zm-9.82 3.074l-4.214-26.606-10.002 1.585-25.64 30.918 1.306 8.243 30.251-4.792 1.106 6.989 9.541-1.511-1.106-6.989 8.573-1.358-1.242-7.836-8.573 1.357zm-30.672 4.858l18.294-21.257 2.837 17.911-21.131 3.346zm19.415-4.593l-2.096-13.232-13.515 15.704 15.611-2.472zm51.236 10.748c-17.114 2.711-27.097-3.794-29.47-18.778-2.362-14.915 5.123-24.131 22.245-26.843 17.057-2.702 27.098 3.799 29.451 18.655 2.363 14.925-5.175 24.265-22.226 26.966zm-.234-1.482c16.264-2.576 23.207-11.178 20.978-25.249-2.217-14.001-11.462-19.986-27.735-17.408-16.336 2.587-23.224 11.067-20.997 25.126 2.237 14.13 11.425 20.117 27.754 17.531zm-1.232-7.775c-9.777 1.548-15.588-2.471-16.981-11.267-1.383-8.727 2.906-14.291 12.688-15.84 9.758-1.546 15.586 2.455 16.962 11.144 1.387 8.757-2.914 14.418-12.669 15.963zm-.235-1.482c8.951-1.417 12.677-6.322 11.422-14.246-1.243-7.852-6.288-11.316-15.246-9.897-8.981 1.422-12.69 6.234-11.441 14.124 1.261 7.961 6.292 11.441 15.265 10.019zm78.094-20.224l1.711 10.8-8.573 1.358 1.106 6.989-12.504 1.98-1.107-6.989-30.25 4.792-1.647-10.394 26.434-31.877 12.043-1.907 4.214 26.606 8.573-1.358zm-9.82 3.074l-4.214-26.606-10.002 1.584-25.64 30.919 1.305 8.242 30.251-4.791 1.107 6.989 9.541-1.511-1.107-6.989 8.574-1.358-1.242-7.837-8.573 1.358zm-30.672 4.858l18.294-21.258 2.837 17.911-21.131 3.347zm19.415-4.593l-2.096-13.232-13.515 15.704 15.611-2.472zM637.805 288.449c.091-.341.168-.658.232-.951l.82-17.31c1.359-28.695 24.994-51.261 53.69-51.261H749v1.501h-56.453c-27.895 0-50.871 21.937-52.192 49.831l-.238 5.033c2.651-10.179 7.763-19.285 15.345-27.105 11.428-11.788 25.58-5.913 42.146 17.103a.75.75 0 11-1.216.877c-16.101-22.368-29.282-27.839-39.854-16.934-9.95 10.262-15.535 22.778-16.791 37.084-.035.398-.107.856-.217 1.376l-2.281 48.148-1.498-.071.84-17.734H620.5a.75.75 0 01-.634-1.151l17.939-28.436zm-1.143 28.086l1.201-25.366-16.002 25.366h14.801zM859.16 355.654a.75.75 0 01.057-1.501c5.525.212 8.148-2.963 8.037-9.904-.113-6.973-2.408-10.22-6.928-10.141a.75.75 0 01-.027-1.502c5.498-.096 8.33 3.91 8.455 11.619.124 7.739-3.13 11.676-9.594 11.429zm-1.6 52.816a.75.75 0 01.135-1.496c5.507.5 8.293-2.532 8.545-9.47.252-6.97-1.87-10.332-6.388-10.49a.752.752 0 01.052-1.501c5.496.192 8.114 4.341 7.835 12.045-.281 7.735-3.736 11.497-10.179 10.912zm-32.785 58.442a.75.75 0 01.603-1.375c5.097 2.234 8.494.769 10.552-4.565 2.071-5.369.984-8.682-3.271-10.315a.75.75 0 01.538-1.402c5.1 1.958 6.481 6.169 4.132 12.257-2.362 6.124-6.666 7.981-12.554 5.4zm-54-199.875l1.45.387c-2.736 10.272-8.445 16.333-17.078 18.062l-.294-1.473c8.034-1.608 13.325-7.226 15.922-16.976zM686.776 286.945l2 7.509a.75.75 0 101.449-.387l-2-7.508a.75.75 0 10-1.449.386z"
        ></path>
        <path
          fill="#263E4B"
          d="M687.332 287.484l6.5 1.501a.75.75 0 00.337-1.463l-6.5-1.502a.751.751 0 00-.337 1.464zM969.573 292.237c-5.056-6.106-13.847-6.751-21.095-1.978-2.823 1.86-4.882 4.508-5.85 7.535-2.438 7.626 7.141 27.115 28.752 58.957a.75.75 0 001.24-.844c-21.259-31.324-30.785-50.706-28.563-57.656.861-2.693 2.704-5.063 5.246-6.737 6.645-4.377 14.581-3.794 19.115 1.681a.75.75 0 101.155-.958z"
        ></path>
      </svg>
      <Footer />
    </Fragment>
  );
};

export default Page404;
