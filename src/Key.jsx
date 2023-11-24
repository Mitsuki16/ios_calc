
export function Key(props) {
  return (
    <div
      onClick={(e) => props.handleCalc(e)}
      className=" select-none cursor-pointer key py-[16pt] text-center rounded-full text-3xl text-white"
    >
      {props.keyText}
    </div>
  );
}
