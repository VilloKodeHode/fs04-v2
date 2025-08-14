export const ScreenSection = ({ className, children }) => {
  return (
    <>
      <section
        className={`h-screen flex justify-center items-center ${className}`}>
        {children}
      </section>
    </>
  );
};
