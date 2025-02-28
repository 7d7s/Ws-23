"use client"
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

// Define TypeScript interfaces
interface AppointmentDetails {
  service: string;
  number: string;
  date: string;
  time: string;
  email: string;
}

interface FormData {
  name: string;
  Details: AppointmentDetails;
}

interface ServiceType {
  value: number;
  text: string;
  isActive: boolean;
}

const AppointmentSec: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    Details: {
      service: '',
      number: '',
      date: '',
      time: '',
      email: '',
    },
  });

  const [buttonText, setButtonText] = useState<string>('Submit');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch service types from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:2025/api/appointment/GetActiveDoctorTypes?clinicKey=WSLBLdgeS07"
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load services. Please try again later.');
        setLoading(false);
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === "number" && value.length > 10) {
      return;
    }
  
    if (["service", "number", "date", "time", "email"].includes(name)) { // ✅ Include "email"
      setFormData((prevState) => ({
        ...prevState,
        Details: { ...prevState.Details, [name]: value }, // ✅ Correctly update inside Details
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');
    
    try {
      // Save appointment to API
      const selectedService = services.find(service => service.text === formData.Details.service);

      if (!selectedService) {
        alert('Invalid service selection');
        setIsSending(false);
        setButtonText('Submit');
        return;
      }

      const appointmentData = {
      fullName: formData.name,
      email: formData.Details.email,
      selectedDate: formData.Details.date,
      selectedTime: formData.Details.time,
      phone: formData.Details.number,
      doctorTypeId: selectedService.value, // Assigning the doctorTypeId
        clinicKey: "WSLBLdgeS07" // Including the clinic key for the API
      };
      console.log(formData.name);
      const apiResponse = await fetch("http://localhost:2025/api/appointment/SaveAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
      });
      
      if (!apiResponse.ok) {
        throw new Error('Failed to save appointment');
      }
      
      // Success handling
      setButtonText('Submit');
      setIsSending(false);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        Details: {
          service: '',
          number: '',
          date: '',
          time: '',
          email: '',
        },
      });
    } catch (error) {
      console.error('Error processing appointment:', error);
      setButtonText('Submit');
      setIsSending(false);
      alert('Failed to book appointment. Please try again later.');
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading services...</div>;
  }

  if (error) {
    return <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative">
      {error}
    </div>;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="">
        <div className="md:p-6 p-1 space-y-4">
          {/* Service Selection */}
          <div>
            <select
              name="service"
              required
              className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleChange}
              value={formData.Details.service}
            >
              <option value="" disabled>
                Select a Service
              </option>
              {services.map((service) => (
                <option key={service.value} value={service.text}>
                  {service.text}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              name="number"
              required
              className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Phone Number"
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              value={formData.Details.number}
            />
          </div>

          <div>
             <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.Details.email}
            />
          </div>
</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.Details.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="time"
                name="time"
                required
                className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.Details.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              className="w-full py-3 px-4 btn-airtel text-white font-bold uppercase tracking-wider rounded transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSending}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentSec;