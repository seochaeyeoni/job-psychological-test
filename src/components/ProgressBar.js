const ProgressBar = ({ percent }) => {
  return (
    <>
      <h2 style={{display: "inline", float: "left"}}>검사예시</h2>
      <h2 style={{display: "inline", float: "right"}}>{percent}%</h2>
      <div style={{display: "inline-block", width: "100%"}} class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: percent+"%"}}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
