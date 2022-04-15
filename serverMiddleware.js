export default (req,res,next)=>{
  if(req.url.includes('/about')){
    res.writeHead(301, {'Location': '/'});
    res.end();
  }else if(req.url.includes('/test')){
    res.writeHead(200, {'Content-Type': 'application/json'});
    const json = JSON.stringify({
      name: 'Nguyen Van A',
      age: 20
    })
    res.end(json);
  }else {
    next();
  }
}
