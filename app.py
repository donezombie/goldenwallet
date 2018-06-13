from flask import *
from mongoengine import *

app = Flask(__name__)

app.secret_key = "123456789"

@app.route('/', methods = ['GET', 'POST'])
def index():
    error = 0
    if request.method == "GET":
        return render_template('index.html')
    elif request.method == "POST":
        form = request.form
        income = form['income']
        goal = form['goal']
        month = form['month']
        max = form['max']
        bank = form['bank']
        if income == "" or goal == "" or month == "" or max == "" or bank == "" :
            error = 1
            return render_template('error.html',error=error)
        else:
            saving = round(((int(goal)*float(bank)/12)/(pow((1+float(bank)/12),int(month))-1)),1)
            session['income']= income
            session['goal']=goal
            session['saving']=saving
            session['bank']=bank
            session['month']=month

            if saving > float(max) :
                error = 2
                return render_template('error.html',error=error)
            else:
                return redirect (url_for('saving'))

@app.route('/saving')
def saving():
    colors = ["#f54844", "#dbdad3"]
    labels = ["Thu nhập","Tiết kiệm"]
    pie_labels = labels
    pie_values = [session['income'], session['saving']]

    bar_values= []
    bar_labels = []

    month = int(session['month'])
    bank = float(session['bank'])
    saving = float(session['saving'])
    var = 0
    for i in range(int(month)):
        name = "Tháng thứ " + str(i + 1)
        var = round(var + saving*(pow((1+bank/12),i)),3)
        bar_labels.append(name)
        bar_values.append(var)
    print(bar_values)

    return render_template('saving.html', max=200, set=zip(pie_values, labels, colors),labels=bar_labels, values=bar_values)

if __name__ == '__main__':
    app.run(debug=True)
