import ContentLoader from "react-content-loader";
import cardStyles from "./Card/Card.module.scss";

export function Loader() {
  return (
    <div className={cardStyles.card}>
      <ContentLoader
        speed={2}
        width={210}
        height={293}
        viewBox="0 0 210 293"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="6" rx="10" ry="10" width="150" height="112" />
        <rect x="0" y="139" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="203" rx="8" ry="8" width="80" height="25" />
        <rect x="118" y="198" rx="8" ry="8" width="32" height="32" />
        <rect x="0" y="165" rx="3" ry="3" width="93" height="15" />
      </ContentLoader>
    </div>
  );
}
