
const Hero = (props) => {
  return (
    <div>
      <ul>
        <li>id: {props.item.id} </li>
        <li>name: {props.item.name} </li>
        <li>flavor: {props.item.flavor} </li>
      </ul>
    </div>
  );
};

export default Hero;
