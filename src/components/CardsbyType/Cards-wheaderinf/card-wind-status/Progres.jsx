import './progres.css'

function progres({porciento}) {


  return (<div className='ctn-progres'>

    <label ><h1>0</h1><h1>50</h1><h1>100</h1></label>
    <progress id="file" max="100" value={porciento}></progress>
    <label>%</label>
    
    </div>
  )

}

export default progres