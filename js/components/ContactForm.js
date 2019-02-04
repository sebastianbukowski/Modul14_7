var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className = {'contact_form form-group'}>
          <label htmlFor = {'name'}>
            {'Imię: '}
          </label>
          <input 
            type = {'text'}
            placeholder = {'Imię'}
            value = {this.props.contact.firstName}
            className = {'form-control'}>
          </input>
          <label htmlFor = {'surname'}>
            {'Nazwisko: '}
          </label>
          <input 
            type = {'text'}
            placeholder = {'Nazwisko'}
            value = {this.props.contact.lastName}
            className = {'form-control'}>
          </input>
          <label htmlFor = {'email'}>
            {'Email: '}
          </label>
          <input 
            type = {'text'}
            placeholder = {'E-mail'}
            value = {this.props.contact.email}
            className = {'form-control'}>
          </input>
          <button
            type = {'submit'}
            className = {'btn btn-primary'}>
            {'Dodaj kontakt'}
          </button>
        </form>
      )
    },
  })

 