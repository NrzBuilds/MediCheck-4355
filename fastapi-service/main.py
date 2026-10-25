from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle

app = FastAPI(title="MediCheck AI Service")

# Express backend ko is API ko call karne ki permission dete hain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Trained model aur data load karte hain
model = pickle.load(open("disease_model.pkl", "rb"))
symptoms_list = pickle.load(open("symptoms_list.pkl", "rb"))
diseases_list = pickle.load(open("diseases_list.pkl", "rb"))

# Disease -> Doctor specialization mapping
disease_doctor_map = {
    "Fungal infection": "Dermatologist",
    "Allergy": "Allergist",
    "GERD": "Gastroenterologist",
    "Chronic cholestasis": "Gastroenterologist",
    "Drug Reaction": "General Physician",
    "Peptic ulcer diseae": "Gastroenterologist",
    "AIDS": "Infectious Disease Specialist",
    "Diabetes": "Endocrinologist",
    "Gastroenteritis": "Gastroenterologist",
    "Bronchial Asthma": "Pulmonologist",
    "Hypertension": "Cardiologist",
    "Migraine": "Neurologist",
    "Cervical spondylosis": "Orthopedic",
    "Paralysis (brain hemorrhage)": "Neurologist",
    "Jaundice": "Hepatologist",
    "Malaria": "General Physician",
    "Chicken pox": "General Physician",
    "Dengue": "General Physician",
    "Typhoid": "General Physician",
    "hepatitis A": "Hepatologist",
    "Hepatitis B": "Hepatologist",
    "Hepatitis C": "Hepatologist",
    "Hepatitis D": "Hepatologist",
    "Hepatitis E": "Hepatologist",
    "Alcoholic hepatitis": "Hepatologist",
    "Tuberculosis": "Pulmonologist",
    "Common Cold": "General Physician",
    "Pneumonia": "Pulmonologist",
    "Dimorphic hemmorhoids(piles)": "Proctologist",
    "Heart attack": "Cardiologist",
    "Varicose veins": "Vascular Surgeon",
    "Hypothyroidism": "Endocrinologist",
    "Hyperthyroidism": "Endocrinologist",
    "Hypoglycemia": "Endocrinologist",
    "Osteoarthristis": "Orthopedic",
    "Arthritis": "Rheumatologist",
    "(vertigo) Paroymsal  Positional Vertigo": "ENT Specialist",
    "Acne": "Dermatologist",
    "Urinary tract infection": "Urologist",
    "Psoriasis": "Dermatologist",
    "Impetigo": "Dermatologist",
}

class SymptomInput(BaseModel):
    symptoms: list[str]

@app.get("/")
def root():
    return {"message": "MediCheck AI Service is running"}

@app.get("/symptoms")
def get_symptoms():
    return {"symptoms": symptoms_list, "total": len(symptoms_list)}

@app.post("/predict")
def predict_disease(data: SymptomInput):
    input_vector = [
        1 if symptom in data.symptoms else 0 for symptom in symptoms_list
    ]
    prediction = model.predict([input_vector])[0]
    doctor = disease_doctor_map.get(prediction, "General Physician")

    return {
        "predicted_disease": prediction,
        "recommended_doctor": doctor,
        "symptoms_received": data.symptoms
    }