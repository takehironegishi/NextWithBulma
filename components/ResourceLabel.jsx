export const ResourceLabel = ({ status }) => (
  <span className={`tag is-large ml-4 resource-${status}`}>
    {status}
  </span>
);