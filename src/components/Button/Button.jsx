import classes from './Button.module.css';

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={`toggle-error ${isActive ? `${classes.button} 
        ${classes.active}` : classes.button}`}
    >
      {children}
    </button>
  );
}
