export const Section = ({compatible, model, children}) => {
  const eq = (elem) => elem.trim() == model;
  if (!compatible.split(",").some(eq)) {
    children = "";
  }
  return <>{children}</>
};
