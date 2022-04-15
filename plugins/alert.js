export default (context, inject)=>{
  inject('alert', function (mess){
    alert(mess);
  })
}
