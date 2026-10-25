import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle

# Real dataset load kar rahe hain
df = pd.read_csv("Training.csv")

# Agar koi extra "Unnamed" column ho to usko hata do
df = df.loc[:, ~df.columns.str.contains('^Unnamed')]

# Features (symptoms) aur Target (disease) alag karte hain
X = df.drop("prognosis", axis=1)
y = df["prognosis"]

# Data ko train aur test mein split karte hain (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Model banate hain aur train karte hain
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

# Accuracy check karte hain
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)

# Model aur symptom/disease list ko save karte hain (pickle files)
pickle.dump(model, open("disease_model.pkl", "wb"))
pickle.dump(list(X.columns), open("symptoms_list.pkl", "wb"))
pickle.dump(sorted(y.unique().tolist()), open("diseases_list.pkl", "wb"))

print("Model trained and saved successfully!")
print("Total symptoms:", len(X.columns))
print("Total diseases:", len(y.unique()))