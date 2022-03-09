from rest_framework import serializers
from rest_framework.validators import UniqueValidator
import re
from .models import *

#email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = Patient
		#fields = ['email','password','phone','pincode']
		fields = ['username','password','doc_code']
		
	#def validate(self,attrs):
		#email = attrs.get('email',' ')

		#if not email_pattern.match(email):
			#raise serializers.ValidationError('Please enter a valid email!')
		#return attrs
		
	def create(self,validated_data):
            validated_data['is_active'] = True
            return Patient.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    doc_code=serializers.CharField(max_length=4,min_length=4,write_only = True)

    class Meta:
        model = Patient
        fields = ['username','password','doc_code']

class MedicineSerializer(serializers.ModelSerializer):
	patient = serializers.ReadOnlyField(source='patient.username')

	class Meta:
		model = Medicine
		fields = '__all__'
