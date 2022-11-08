export const Container = ({children}) => { //le indico que tendra hijos
  return (
    <div className="container p-4">
      <div className="col-md-4 offset-md-4">
      {children} 
      </div>
    </div>
  )
}