-- Enable Row Level Security (RLS) for data protection

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE calculation_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Users can only see their own profile
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Patients can only be accessed by their assigned doctors
CREATE POLICY "Doctors can view their patients" ON patients
    FOR SELECT USING (created_by = auth.uid());

CREATE POLICY "Doctors can create patients" ON patients
    FOR INSERT WITH CHECK (created_by = auth.uid());

CREATE POLICY "Doctors can update their patients" ON patients
    FOR UPDATE USING (created_by = auth.uid());

-- Consultations access control
CREATE POLICY "Doctors can view their consultations" ON consultations
    FOR SELECT USING (doctor_id = auth.uid());

CREATE POLICY "Doctors can create consultations" ON consultations
    FOR INSERT WITH CHECK (doctor_id = auth.uid());

CREATE POLICY "Doctors can update their consultations" ON consultations
    FOR UPDATE USING (doctor_id = auth.uid());

-- Support tickets - users can only see their own
CREATE POLICY "Users can view own support tickets" ON support_tickets
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create support tickets" ON support_tickets
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Calculation history - users can only see their own
CREATE POLICY "Users can view own calculation history" ON calculation_history
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can create calculation history" ON calculation_history
    FOR INSERT WITH CHECK (user_id = auth.uid());

-- Audit log - read-only for users, they can only see their own actions
CREATE POLICY "Users can view own audit log" ON audit_log
    FOR SELECT USING (user_id = auth.uid());
