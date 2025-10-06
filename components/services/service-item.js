import style from "./service-item.module.css";
import Image from "next/image";
export default function ServiceItem(props) {
  const { title, image, excerpt } = props.service;
  const imagePath = `/images/services/${image}`;
  return (
    <li className={style.service} key={title}>
      <div className={style.image}>
        <Image
          src={imagePath}
          alt={title}
          width={150}
          height={100}
          layout="responsive"
        />
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p className="text-muted">{excerpt}</p>
      </div>
    </li>
  );
}
