import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';

const Button = ({ className, children, getMorePosts, loading }) => {
  return (
    <button className={cl(className, styles.button)} disabled={loading} onClick={getMorePosts}>
      {children}
    </button>
  );
};

export default Button;
