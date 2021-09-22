import React from 'react';

class Slectedbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedcars : ""
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className ="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">SELECT A CAR</p>

                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <select
                                                     onChange ={e => this.setState({selectedcars : e.target.value})}
                                                     className="form-control">
                                                        <option value="">select a car</option>
                                                        <option value="bmw">bmw</option>
                                                        <option value="audi">audi</option>
                                                        <option value="benz">benz</option>
                                                        <option value="ducati">ducati</option>
                                                        <option value="rollsroyce"></option>
                                                   
                                                </select>
                                            </div>
                                           
                                        </form>

                                        <div className="col">
                                        <p className="h4">{this.state.selectedcars}</p>

                                    </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
           
        );
    }
}


export default Slectedbox;
