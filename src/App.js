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
            emailToSendSender: null,
            emailToSendRecipient: null,
            emailToSendSubject: null,
            emailToSendMessage: null,
        }

        this.setSearchFilter = this.setSearchFilter.bind(this)
        this.setEmailToSendSender = this.setEmailToSendSender.bind(this)
        this.setEmailToSendRecipient = this.setEmailToSendRecipient.bind(this)
        this.setEmailToSendSubject = this.setEmailToSendSubject.bind(this)
        this.setEmailToSendMessage = this.setEmailToSendMessage.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }


    async componentDidMount() {
        let response = await fetch('http://localhost:3001/emails')
        let responseInJSON = await response.json()
        this.setState({allEmails: responseInJSON}, () => console.log(this.state.allEmails))
    }

    async sendEmail() {
        await fetch('http://localhost:3001/send', {
            method: 'POST',
            body: JSON.stringify(this.messageBuilder()),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => this.componentDidMount())
    }

    messageBuilder() {
        let obj = {
            subject: this.state.emailToSendSubject,
            sender: this.state.emailToSendSender,
            recipient: this.state.emailToSendRecipient,
            message: this.state.emailToSendMessage
        }
        return obj
    }

    setSearchFilter(event) {
        const value = event.target.value
        this.setState({searchFilter: value}, () => console.log(this.state.searchFilter))
    }

    setEmailToSendSender(event) {
        const value = event.target.value
        this.setState({emailToSendSender: value})
    }

    setEmailToSendRecipient(event) {
        const value = event.target.value
        this.setState({emailToSendRecipient: value})
    }

    setEmailToSendSubject(event) {
        const value = event.target.value
        this.setState({emailToSendSubject: value})
    }

    setEmailToSendMessage(event) {
        const value = event.target.value
        this.setState({emailToSendMessage: value})
    }

    render() {
        let {searchFilter} = this.state;
        let {setSearchFilter} = this;
        let {setEmailToSendSender} = this;
        let {setEmailToSendRecipient} = this;
        let {setEmailToSendSubject} = this;
        let {setEmailToSendMessage} = this;
        let {sendEmail} = this;
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
                        <SearchEmails search={searchFilter} allEmails={this.state.allEmails}
                                      searchFilter={setSearchFilter}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={'/SendEmails'}>
                        <SendEmail sender={setEmailToSendSender}
                                   recipient={setEmailToSendRecipient} subject={setEmailToSendSubject}
                                   message={setEmailToSendMessage} sendEmail={sendEmail}/>
                    </Route>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default App;
