const Navbar = (props: any) => {
  const toggleTheme = props.toggleTheme;
  return (
    <>
      <div>This is app header</div>
      <button onClick={toggleTheme}>switch</button>
    </>
  );
};

export default Navbar;
