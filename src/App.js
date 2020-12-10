import './App.css';
import {Component} from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import ViewAllEmails from "./components/ViewAllEmails";
import SearchEmails from "./components/SearchEmails";
import SendEmail from "./components/SendEmail";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allEmails: [],
            searchFilter: null,

        }

        this.setSearchFilter = this.setSearchFilter.bind(this)
    }


    async componentDidMount() {
        let response = await fetch('http://localhost:3001/emails')
        let responseInJSON = await response.json()
        this.setState({allEmails: responseInJSON}, () => console.log(this.state.allEmails))
    }

    setSearchFilter(event){
        const value = event.target.value
        this.setState({searchFilter: value}, ()=> console.log(this.state.searchFilter))
    }


    render() {
        let {searchFilter} = this.state;
        let {setSearchFilter} = this;
        const navigationBar = () => {
            return (
                <nav>
                    <Link to={'ViewAllEmails'}>
                        <button value={'ViewAllEmails'}>View All Emails</button>
                    </Link>
                    <Link to={'SearchEmails'}>
                        <button value={'SearchEmails'}>Search Emails</button>
                    </Link>
                    <Link to={'SendEmails'}>
                        <button value={'SearchEmails'}>Send Emails</button>
                    </Link>
                </nav>
            )
        }


        return (
            <BrowserRouter>
                {navigationBar()}
                <Switch>
                    <Route path={'/ViewAllEmails'}>
                        <ViewAllEmails allEmails={this.state.allEmails}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={'/SearchEmails'}>
                        <SearchEmails search={searchFilter} allEmails={this.state.allEmails} searchFilter={setSearchFilter}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={'/SendEmails'}>
                        <SendEmail/>
                    </Route>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default App;
