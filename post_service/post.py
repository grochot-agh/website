from flask import Flask, render_template, request
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException

app = Flask(__name__)

# Ustawienia klucza API
sib_api_v3_sdk.configuration.api_key['api-key'] = '4fa6adfd64ff5fec9a0f3867f58c7072b4e810a2c1c05d31208b995ed87ef833-Z34I0rsEwpV06QJw'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_campaign', methods=['POST'])
def create_campaign():
    name = request.form.get('SocksBox')
    subject = request.form.get('Your Order')
    from_name = request.form.get('SocksBox')
    from_email = request.form.get('socksbox.contact@gmail.com')
    html_content = request.form.get('html_content')
    list_ids = request.form.getlist('list_ids')

    api_instance = sib_api_v3_sdk.EmailCampaignsApi()
    email_campaigns = sib_api_v3_sdk.CreateEmailCampaign(
        name=name,
        subject=subject,
        sender={"name": from_name, "email": from_email},
        type="classic",
        html_content=html_content,
        recipients={"listIds": list_ids},
        scheduled_at="2018-01-01 00:00:01"
    )

    try:
        api_response = api_instance.create_email_campaign(email_campaigns)
        return 'Campaign created successfully!'
    except ApiException as e:
        return 'An error occurred: ' + str(e)

if __name__ == '__main__':
    app.run()
