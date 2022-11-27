import React from 'react'


class GetData extends React.Component {
    state = {
        loading: false,
        error: null,
        data: []
    }

    componentDidMount() {
        console.log('el componente fue montado')
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await fetch('https://www.datos.gov.co/resource/gt2j-8ykr.json?$limit=10000000')
            const results = await data.json()
            this.setState({ loading: false, data: results })
            console.log(results)
            console.log('los datos fueron cargados')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        console.log('render')
        return (
            <div>
                <h2>Contagiado al dia de hoy</h2>
                 <li>{this.state.data.length}</li> 
            </div>
        )
    }

}
export default GetData