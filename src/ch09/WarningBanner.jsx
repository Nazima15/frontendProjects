function WarningBanner(props) {
  if (!props.warn) return null;

  return (
    <div className="warning">
      경고!
    </div>
  );
}

export default WarningBanner;
