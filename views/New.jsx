const React = require("react")
const DefaultLayout = require('../layout/default')

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title='New Captains Entry'>
        <nav>
            <a href="/logs">Home Page</a>
        </nav>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/logs" method="POST">
            Title: <input type="text" name="title" /> <br />
            Entry: <input type="textarea" name="entry" /> <br />
            ShipIsBroken: <input type="checkbox" name="shipIsBroken" /><br />
            <input type="submit" name="" value="Create log entry"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New