export interface FormationAction {
  title: string;
  description: string;
  references: string[];
}

export interface FormationPhase {
  inheritance: string;
  context: string;
  details: string;
  success_factors: string[];
  actions: FormationAction[];
}

export interface Emperor {
  name: string;
  reign_period: string;
  achievements: string[];
  merits_and_faults: string;
  controversies: string[];
}

export interface DevelopmentPhase {
  overview: string;
  emperors: Emperor[];
  general_achievements: string[];
}

// Định nghĩa cho sự kiện kháng chiến/nội loạn
export interface HistoricalEvent {
  year: string;
  name: string;
  opponent: string; // Đối thủ (Giặc ngoại xâm hoặc phe nổi dậy)
  description: string;
  outcome: string;
}

export interface ResistancePhase {
  overview: string; // Tổng quan về tình hình an ninh/quân sự
  foreign_resistance: HistoricalEvent[]; // Chống ngoại xâm
  domestic_uprisings: HistoricalEvent[]; // Khởi nghĩa nông dân hoặc nội loạn
}

export interface Dynasty {
  name: string;
  period: string;
  formation: FormationPhase;
  development: DevelopmentPhase;
  resistance: ResistancePhase; // New Field
  decline: string;
}

export interface HistoryResponse {
  dynasties: Dynasty[];
}