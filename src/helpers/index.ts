const formatedDate = (): string => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    return `${dd < 10 ? '0' + dd : dd}.${mm < 10 ? '0' + mm : mm}.${yy}`;
  };
  
  const genId = (): any => {
    return `f${(~~(Math.random() * 1e8)).toString(16)}`;
  }

  export {
      formatedDate,
      genId
  }