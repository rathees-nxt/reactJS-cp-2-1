const Button = props => {
  //  Write your code here.
  const {className, children} = props
  return <button className={`button ${className}`}>{children}</button>
}

const element = (
  //  Write your code here.
  <div className='social-container'>
    <div className='content-container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='button-container'>
        <Button className='like-button' children='Like' />
        <Button className='comment-button' children='Comment' />
        <Button className='share-button' children='Share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
