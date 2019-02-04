var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contact_item clearfix row'}>
          <figure className={'col-12 col-sm-5 col-md-3 col-lg-3 col-xl-3'}>
            <img className={'contactImage'} src={'./images/contact.ico'} ></img>
          </figure>
          <div className={'col-12 col-sm-7 col-md-9 col-lg-9 col-xl-9'}>
            <p className={'contactLabel'}>
                Imię: {this.props.item.firstName}
            </p>
            <p className={'contactLabel'}>
                Nazwisko: {this.props.item.lastName}
            </p>
            <a href={'mailto:' + this.props.item.email}>
                {this.props.item.email}
            </a>
          </div>
           <div className={'clear'}></div>   
        </div>
      )
    },
  });

 

 