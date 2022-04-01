export default function Header() {
  return (
    <>
      <div className="ui pointing menu" style={{ padding: "4px 30px" }}>
        <a className="active item"><b>JOX SHOP</b></a>
        <div className="right menu">
          <div className="ui vertical animated button" tabindex="0">
            <div className="hidden content">Shop</div>
            <div className="visible content">
              <i className="shop icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
