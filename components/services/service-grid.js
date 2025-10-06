import style from "./service-grid.module.css";
import ServiceItem from "./service-item";
export default function ServiceGrid(props) {
  const { services } = props;
  return (
    <ul className={style.grid}>
      {services.map((service) => (
        <ServiceItem service={service} key={service.title} />
      ))}
    </ul>
  );
}
