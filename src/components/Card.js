var React = require('react')

var Card = React.createClass({
  render: function() {
    return (
    <div className="row">
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand[0]+ ".png"} /></h1>
      </div>
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand[1] + ".png"} /></h1>
      </div>
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand[2] + ".png"} /></h1>
      </div>
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand[3] + ".png"} /></h1>
      </div>
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand[4] + ".png"} /></h1>
      </div>
    </div>
    )
  }

})

module.exports = Card
