function ContectUs() {
  return (
    <form className="space-y-4">
      {/* Service Selection */}
      <select
        name="service"
        required
        className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-blue-300"
      >
        <option value="" disabled>
          Select a Service
        </option>
        <option value="General Physician">General Physician</option>
        <option value="Gynaecologist">Gynaecologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Nephrologist">Nephrologist</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Diabetologist">Diabetologist</option>
        <option value="Physiotherapist">Physiotherapist</option>
        <option value="Dietician">Dietician</option>
        <option value="Psychiatrist">Psychiatrist</option>
        <option value="Psychologist">Psychologist</option>
        <option value="Therapies">Therapies</option>
        <option value="Anxiety">Anxiety</option>
        <option value="Depression">Depression</option>
        <option value="OCD">OCD</option>
        <option value="Psychosis">Psychosis</option>
        <option value="Autism Services">Autism Services</option>
        <option value="ADHD Support">ADHD Support</option>
        <option value="Counseling">Counseling</option>
        <option value="Cognitive Behavioral Therapy">
          Cognitive Behavioral Therapy
        </option>
      </select>

      {/* Name Input */}
      <input
        type="text"
        name="name"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        placeholder="Your Name"
      />

      {/* Phone Number Input */}
      <input
        type="tel"
        name="number"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        placeholder="Phone Number"
        pattern="[0-9]{10}"
        maxLength={10}
      />

      {/* Date & Time Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        />
        <input
          type="time"
          name="time"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Submit Button */}

    </form>
  );
}

export default ContectUs;
