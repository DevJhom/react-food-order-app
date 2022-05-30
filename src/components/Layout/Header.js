import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>React Food Order App</h1>
          <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="no copyright food image from unsplash.com"/>
      </div>
  </Fragment>;
};

export default Header;
