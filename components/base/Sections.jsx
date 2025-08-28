export const ScreenSection = ({ className, children }) => {
  return (
    <>
      <section
        className={`min-h-screen flex py-24 justify-center items-center ${className}`}>
        {children}
      </section>
    </>
  );
};
