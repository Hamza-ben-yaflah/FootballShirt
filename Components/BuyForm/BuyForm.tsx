import { Button, Form, Input, Select } from "antd";
import Router from "next/router";
import styles from "./BuyForm.module.css";

const { Option } = Select;

interface dataProps {
  email: string;
  firstname: string;
  lastname: string;
  country: string;
  streetAdress: string;
  city: string;
  phone: string;
}

const BuyForm = ({ details }: { details: any }) => {
  const onFinish = (values: dataProps) => {
    const form = document.getElementById("buyProcess");

    const { email, firstname, lastname, country, streetAdress, city, phone } =
      values;
    details
      ? Router.push({
          pathname: `/Checkout/${details.permalink}`,
          query: {
            email,
            firstname,
            lastname,
            country,
            streetAdress,
            city,
            phone,
          },
        })
      : Router.push({
          pathname: `/CheckoutCart/CheckoutCart`,
          query: {
            email,
            firstname,
            lastname,
            country,
            streetAdress,
            city,
            phone,
          },
        });
  };

  return (
    <Form name="buyProcess" wrapperCol={{ span: 20 }} onFinish={onFinish}>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstname"
        label="FirstName"
        rules={[
          {
            required: true,
            message: "Please input your Name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="LastName"
        rules={[
          {
            required: true,
            message: "Please input your Name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <Select placeholder="Please select a country" data-cy="select-button">
          <Option data-cy="Afghanistan" value="Afghanistan">
            Afghanistan
          </Option>
          <Option value="Åland Islands">Åland Islands</Option>
          <Option value="Albania">Albania</Option>
          <Option value="Algeria">Algeria</Option>
          <Option value="American Samoa">American Samoa</Option>
          <Option value="Andorra">Andorra</Option>
          <Option value="Angola">Angola</Option>
          <Option value="Anguilla">Anguilla</Option>
          <Option value="Antarctica">Antarctica</Option>
          <Option value="Antigua and Barbuda">Antigua and Barbuda</Option>
          <Option value="Argentina">Argentina</Option>
          <Option value="Armenia">Armenia</Option>
          <Option value="Aruba">Aruba</Option>
          <Option value="Australia">Australia</Option>
          <Option value="Austria">Austria</Option>
          <Option value="Azerbaijan">Azerbaijan</Option>
          <Option value="Bahamas">Bahamas</Option>
          <Option value="Bahrain">Bahrain</Option>
          <Option value="Bangladesh">Bangladesh</Option>
          <Option value="Barbados">Barbados</Option>
          <Option value="Belarus">Belarus</Option>
          <Option value="Belgium">Belgium</Option>
          <Option value="Belize">Belize</Option>
          <Option value="Benin">Benin</Option>
          <Option value="Bermuda">Bermuda</Option>
          <Option value="Bhutan">Bhutan</Option>
          <Option value="Bolivia">Bolivia</Option>
          <Option value="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
          <Option value="Botswana">Botswana</Option>
          <Option value="Bouvet Island">Bouvet Island</Option>
          <Option value="Brazil">Brazil</Option>
          <Option value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </Option>
          <Option value="Brunei Darussalam">Brunei Darussalam</Option>
          <Option value="Bulgaria">Bulgaria</Option>
          <Option value="Burkina Faso">Burkina Faso</Option>
          <Option value="Burundi">Burundi</Option>
          <Option value="Cambodia">Cambodia</Option>
          <Option value="Cameroon">Cameroon</Option>
          <Option value="Canada">Canada</Option>
          <Option value="Cape Verde">Cape Verde</Option>
          <Option value="Cayman Islands">Cayman Islands</Option>
          <Option value="Central African Republic">
            Central African Republic
          </Option>
          <Option value="Chad">Chad</Option>
          <Option value="Chile">Chile</Option>
          <Option value="China">China</Option>
          <Option value="Christmas Island">Christmas Island</Option>
          <Option value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </Option>
          <Option value="Colombia">Colombia</Option>
          <Option value="Comoros">Comoros</Option>
          <Option value="Congo">Congo</Option>
          <Option value="Congo, The Democratic Republic of The">
            Congo, The Democratic Republic of The
          </Option>
          <Option value="Cook Islands">Cook Islands</Option>
          <Option value="Costa Rica">Costa Rica</Option>
          <Option value="Cote D'ivoire">Cote D ivoire</Option>
          <Option value="Croatia">Croatia</Option>
          <Option value="Cuba">Cuba</Option>
          <Option value="Cyprus">Cyprus</Option>
          <Option value="Czech Republic">Czech Republic</Option>
          <Option value="Denmark">Denmark</Option>
          <Option value="Djibouti">Djibouti</Option>
          <Option value="Dominica">Dominica</Option>
          <Option value="Dominican Republic">Dominican Republic</Option>
          <Option value="Ecuador">Ecuador</Option>
          <Option value="Egypt">Egypt</Option>
          <Option value="El Salvador">El Salvador</Option>
          <Option value="Equatorial Guinea">Equatorial Guinea</Option>
          <Option value="Eritrea">Eritrea</Option>
          <Option value="Estonia">Estonia</Option>
          <Option value="Ethiopia">Ethiopia</Option>
          <Option value="Falkland Islands (Malvinas)">
            Falkland Islands (Malvinas)
          </Option>
          <Option value="Faroe Islands">Faroe Islands</Option>
          <Option value="Fiji">Fiji</Option>
          <Option value="Finland">Finland</Option>
          <Option value="France">France</Option>
          <Option value="French Guiana">French Guiana</Option>
          <Option value="French Polynesia">French Polynesia</Option>
          <Option value="French Southern Territories">
            French Southern Territories
          </Option>
          <Option value="Gabon">Gabon</Option>
          <Option value="Gambia">Gambia</Option>
          <Option value="Georgia">Georgia</Option>
          <Option value="Germany">Germany</Option>
          <Option value="Ghana">Ghana</Option>
          <Option value="Gibraltar">Gibraltar</Option>
          <Option value="Greece">Greece</Option>
          <Option value="Greenland">Greenland</Option>
          <Option value="Grenada">Grenada</Option>
          <Option value="Guadeloupe">Guadeloupe</Option>
          <Option value="Guam">Guam</Option>
          <Option value="Guatemala">Guatemala</Option>
          <Option value="Guernsey">Guernsey</Option>
          <Option value="Guinea">Guinea</Option>
          <Option value="Guinea-bissau">Guinea-bissau</Option>
          <Option value="Guyana">Guyana</Option>
          <Option value="Haiti">Haiti</Option>
          <Option value="Heard Island and Mcdonald Islands">
            Heard Island and Mcdonald Islands
          </Option>
          <Option value="Holy See (Vatican City State)">
            Holy See (Vatican City State)
          </Option>
          <Option value="Honduras">Honduras</Option>
          <Option value="Hong Kong">Hong Kong</Option>
          <Option value="Hungary">Hungary</Option>
          <Option value="Iceland">Iceland</Option>
          <Option value="India">India</Option>
          <Option value="Indonesia">Indonesia</Option>
          <Option value="Iran, Islamic Republic of">
            Iran, Islamic Republic of
          </Option>
          <Option value="Iraq">Iraq</Option>
          <Option value="Ireland">Ireland</Option>
          <Option value="Isle of Man">Isle of Man</Option>
          <Option value="Israel">Israel</Option>
          <Option value="Italy">Italy</Option>
          <Option value="Jamaica">Jamaica</Option>
          <Option value="Japan">Japan</Option>
          <Option value="Jersey">Jersey</Option>
          <Option value="Jordan">Jordan</Option>
          <Option value="Kazakhstan">Kazakhstan</Option>
          <Option value="Kenya">Kenya</Option>
          <Option value="Kiribati">Kiribati</Option>
          <Option value="Korea, Democratic People's Republic of">
            Korea, Democratic Peoples Republic of
          </Option>
          <Option value="Korea, Republic of">Korea, Republic of</Option>
          <Option value="Kuwait">Kuwait</Option>
          <Option value="Kyrgyzstan">Kyrgyzstan</Option>
          <Option value="Lao People's Democratic Republic">
            Lao Peoples Democratic Republic
          </Option>
          <Option value="Latvia">Latvia</Option>
          <Option value="Lebanon">Lebanon</Option>
          <Option value="Lesotho">Lesotho</Option>
          <Option value="Liberia">Liberia</Option>
          <Option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</Option>
          <Option value="Liechtenstein">Liechtenstein</Option>
          <Option value="Lithuania">Lithuania</Option>
          <Option value="Luxembourg">Luxembourg</Option>
          <Option value="Macao">Macao</Option>
          <Option value="Macedonia, The Former Yugoslav Republic of">
            Macedonia, The Former Yugoslav Republic of
          </Option>
          <Option value="Madagascar">Madagascar</Option>
          <Option value="Malawi">Malawi</Option>
          <Option value="Malaysia">Malaysia</Option>
          <Option value="Maldives">Maldives</Option>
          <Option value="Mali">Mali</Option>
          <Option value="Malta">Malta</Option>
          <Option value="Marshall Islands">Marshall Islands</Option>
          <Option value="Martinique">Martinique</Option>
          <Option value="Mauritania">Mauritania</Option>
          <Option value="Mauritius">Mauritius</Option>
          <Option value="Mayotte">Mayotte</Option>
          <Option value="Mexico">Mexico</Option>
          <Option value="Micronesia, Federated States of">
            Micronesia, Federated States of
          </Option>
          <Option value="Moldova, Republic of">Moldova, Republic of</Option>
          <Option value="Monaco">Monaco</Option>
          <Option value="Mongolia">Mongolia</Option>
          <Option value="Montenegro">Montenegro</Option>
          <Option value="Montserrat">Montserrat</Option>
          <Option value="Morocco">Morocco</Option>
          <Option value="Mozambique">Mozambique</Option>
          <Option value="Myanmar">Myanmar</Option>
          <Option value="Namibia">Namibia</Option>
          <Option value="Nauru">Nauru</Option>
          <Option value="Nepal">Nepal</Option>
          <Option value="Netherlands">Netherlands</Option>
          <Option value="Netherlands Antilles">Netherlands Antilles</Option>
          <Option value="New Caledonia">New Caledonia</Option>
          <Option value="New Zealand">New Zealand</Option>
          <Option value="Nicaragua">Nicaragua</Option>
          <Option value="Niger">Niger</Option>
          <Option value="Nigeria">Nigeria</Option>
          <Option value="Niue">Niue</Option>
          <Option value="Norfolk Island">Norfolk Island</Option>
          <Option value="Northern Mariana Islands">
            Northern Mariana Islands
          </Option>
          <Option value="Norway">Norway</Option>
          <Option value="Oman">Oman</Option>
          <Option value="Pakistan">Pakistan</Option>
          <Option value="Palau">Palau</Option>
          <Option value="Palestinian Territory, Occupied">
            Palestinian Territory, Occupied
          </Option>
          <Option value="Panama">Panama</Option>
          <Option value="Papua New Guinea">Papua New Guinea</Option>
          <Option value="Paraguay">Paraguay</Option>
          <Option value="Peru">Peru</Option>
          <Option value="Philippines">Philippines</Option>
          <Option value="Pitcairn">Pitcairn</Option>
          <Option value="Poland">Poland</Option>
          <Option value="Portugal">Portugal</Option>
          <Option value="Puerto Rico">Puerto Rico</Option>
          <Option value="Qatar">Qatar</Option>
          <Option value="Reunion">Reunion</Option>
          <Option value="Romania">Romania</Option>
          <Option value="Russian Federation">Russian Federation</Option>
          <Option value="Rwanda">Rwanda</Option>
          <Option value="Saint Helena">Saint Helena</Option>
          <Option value="Saint Kitts and Nevis">Saint Kitts and Nevis</Option>
          <Option value="Saint Lucia">Saint Lucia</Option>
          <Option value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </Option>
          <Option value="Saint Vincent and The Grenadines">
            Saint Vincent and The Grenadines
          </Option>
          <Option value="Samoa">Samoa</Option>
          <Option value="San Marino">San Marino</Option>
          <Option value="Sao Tome and Principe">Sao Tome and Principe</Option>
          <Option value="Saudi Arabia">Saudi Arabia</Option>
          <Option value="Senegal">Senegal</Option>
          <Option value="Serbia">Serbia</Option>
          <Option value="Seychelles">Seychelles</Option>
          <Option value="Sierra Leone">Sierra Leone</Option>
          <Option value="Singapore">Singapore</Option>
          <Option value="Slovakia">Slovakia</Option>
          <Option value="Slovenia">Slovenia</Option>
          <Option value="Solomon Islands">Solomon Islands</Option>
          <Option value="Somalia">Somalia</Option>
          <Option value="South Africa">South Africa</Option>
          <Option value="South Georgia and The South Sandwich Islands">
            South Georgia and The South Sandwich Islands
          </Option>
          <Option value="Spain">Spain</Option>
          <Option value="Sri Lanka">Sri Lanka</Option>
          <Option value="Sudan">Sudan</Option>
          <Option value="Suriname">Suriname</Option>
          <Option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</Option>
          <Option value="Swaziland">Swaziland</Option>
          <Option value="Sweden">Sweden</Option>
          <Option value="Switzerland">Switzerland</Option>
          <Option value="Syrian Arab Republic">Syrian Arab Republic</Option>
          <Option value="Taiwan">Taiwan</Option>
          <Option value="Tajikistan">Tajikistan</Option>
          <Option value="Tanzania, United Republic of">
            Tanzania, United Republic of
          </Option>
          <Option value="Thailand">Thailand</Option>
          <Option value="Timor-leste">Timor-leste</Option>
          <Option value="Togo">Togo</Option>
          <Option value="Tokelau">Tokelau</Option>
          <Option value="Tonga">Tonga</Option>
          <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
          <Option value="Tunisia">Tunisia</Option>
          <Option value="Turkey">Turkey</Option>
          <Option value="Turkmenistan">Turkmenistan</Option>
          <Option value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </Option>
          <Option value="Tuvalu">Tuvalu</Option>
          <Option value="Uganda">Uganda</Option>
          <Option value="Ukraine">Ukraine</Option>
          <Option value="United Arab Emirates">United Arab Emirates</Option>
          <Option value="United Kingdom">United Kingdom</Option>
          <Option value="United States">United States</Option>
          <Option value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </Option>
          <Option value="Uruguay">Uruguay</Option>
          <Option value="Uzbekistan">Uzbekistan</Option>
          <Option value="Vanuatu">Vanuatu</Option>
          <Option value="Venezuela">Venezuela</Option>
          <Option value="Viet Nam">Viet Nam</Option>
          <Option value="Virgin Islands, British">
            Virgin Islands, British
          </Option>
          <Option value="Virgin Islands, U.S.">Virgin Islands, U.S.</Option>
          <Option value="Wallis and Futuna">Wallis and Futuna</Option>
          <Option value="Western Sahara">Western Sahara</Option>
          <Option value="Yemen">Yemen</Option>
          <Option value="Zambia">Zambia</Option>
          <Option value="Zimbabwe">Zimbabwe</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="streetAdress"
        label="Street Adress"
        rules={[
          {
            required: true,
            message: "Please input your Street",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: "Please input your City",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <p>
        DHL EXPRESS DELIVERY TO EUROPE{" "}
        <strong style={{ fontSize: "20px" }}>11£</strong>
      </p>
      <p>
        DHL EXPRESS DELIVERY TO REST OF THE WORLD{" "}
        <strong style={{ fontSize: "20px" }}>14.5£</strong>
      </p>
      <br />
      <br />
      <div className={styles.btn}>
        <Form.Item>
          <Button type="primary" size="large" shape="round" htmlType="submit">
            <a>Confirm</a>
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default BuyForm;
