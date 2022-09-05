import React from 'react'

class Pokemon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      img: '#',
      size: '',
      exp: '',
      weight: '',
      view: false
    }
  }

  async componentDidMount() {
    await this.fetchApi()
  }

  fetchApi = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    let data = await res.json()

    this.setState({
      img: `${data.sprites.front_default}`,
      size: data.height,
      exp: data.base_experience,
      weight: data.weight,
      view: true
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    this.fetchApi()
    e.preventDefault()
  }


  render() {
    return (
      <>
        <div className='flex flex-col items-center'>
          <form onSubmit={ this.handleSubmit } onChange={this.handleChange}>
            <div className="flex justify-center items-center my-10">
              <input className="w-80 h-8 rounded-l-md px-3 py-5 outline-none bg-transparent text-gray-300 border-gray-400 border-2" type='text' placeholder='search...'></input>
              <input type='submit' value='search' className="w-20 text-center px-3 py-2 border-2 cursor-pointer bg-transparent rounded-r-md text-white bg-blue-500 bg-opacity-60"></input>
            </div>
          </form>
          {
            this.state.view
            ?
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
              <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={this.state.img} alt=""></img>
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{this.state.name}</h1>
              <div className="w-full justify-evenly flex mt-5">
                <div className="flex flex-col justify-center items-center">
                  <h5 className="text-gray-400"> height </h5>
                  <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{this.state.size}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h5 className="text-gray-400">exp</h5>
                  <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{this.state.exp}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h5 className="text-gray-400">weight</h5>
                  <p className="bg-slate-800 text-gray-300 text-sm w-10 h-10 rounded-full flex justify-center items-center">{this.state.weight}</p>
                </div>
              </div>
            </div>
            :
            <h4 className='text-2xl text-white'>Sin resultados...</h4>
          }
        </div>
      </>
    )
  }
}

export default Pokemon;