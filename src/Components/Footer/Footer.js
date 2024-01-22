import './Footer.css';

const topCatigories = ['school supplies', 'Edu Games', 'Mobiles and Tablets'];
const support = [
  'Contact Us',
  'Help & FAQ',
  'Privacy policy',
  'Terms of service',
];
function Footer(props) {
  return (
    <div className='footer'>
      <p className='description'>
        Super Kid is Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Provident pariatur tenetur amet necessitatibus odio laudantium ab nulla,
        accusamus corrupti est placeat repellendus. Totam nemo cum commodi rerum
        quae placeat. Quisquam.
      </p>
      <div className='contacts'>
        <h4>Contact Details</h4>
        <p className='email'>info@superkid#gmail.com</p>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>YT</span>
        <span>Insta</span>
        <span>Insta</span>
      </div>
      <div className='top-catigories'>
        <h4>Top Catigories</h4>
        <ul>
          {topCatigories.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className='support'>
          <h4>Support</h4>
          <ul>
            {support.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='subscribe'>
        <label htmlFor='email'>SUBBSCRIP TO OUR NEWS LETTER</label>
        <input id='email' type='email' placeholder='email' />
      </div>
    </div>
  );
}
export default Footer;
