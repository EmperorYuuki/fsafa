
'use client';

interface SettingsOption {
  id: string;
  name: string;
  value: any; // Could be string or object
}

interface ReadingSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  fontOptions: SettingsOption[];
  selectedFont: SettingsOption;
  onFontChange: (font: SettingsOption) => void;
  fontSizeOptions: SettingsOption[];
  selectedFontSize: SettingsOption;
  onFontSizeChange: (fontSize: SettingsOption) => void;
  themeOptions: SettingsOption[];
  selectedTheme: SettingsOption;
  onThemeChange: (theme: SettingsOption) => void;
  lineSpacingOptions: SettingsOption[];
  selectedLineSpacing: SettingsOption;
  onLineSpacingChange: (lineSpacing: SettingsOption) => void;
}

export default function ReadingSettingsPanel({
  isOpen,
  onClose,
  fontOptions,
  selectedFont,
  onFontChange,
  fontSizeOptions,
  selectedFontSize,
  onFontSizeChange,
  themeOptions,
  selectedTheme,
  onThemeChange,
  lineSpacingOptions,
  selectedLineSpacing,
  onLineSpacingChange
}: ReadingSettingsPanelProps) {
  return (
    <div className={`reading-settings-panel fixed top-0 right-0 h-full w-80 glass-effect backdrop-blur-xl border-l border-border-distinct shadow-xl z-30 transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="settings-header flex items-center justify-between p-4 border-b border-border-subtle">
        <h2 className="text-lg font-semibold">Reading Settings</h2>
        <button 
          onClick={onClose}
          className="btn-icon w-8 h-8 rounded-full bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary transition-all"
          aria-label="Close settings"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="settings-content px-4 py-6 overflow-y-auto h-[calc(100%-64px)]">
        {/* Font Family */}
        <div className="settings-section mb-8">
          <h3 className="settings-section-title text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">Font Family</h3>
          <div className="font-options flex flex-wrap gap-2">
            {fontOptions.map((font) => (
              <button
                key={font.id}
                className={`font-option py-2 px-4 rounded-lg transition-all duration-200 ${
                  selectedFont.id === font.id 
                    ? 'bg-primary text-white' 
                    : 'bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary'
                }`}
                onClick={() => onFontChange(font)}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Font Size */}
        <div className="settings-section mb-8">
          <h3 className="settings-section-title text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">Font Size</h3>
          <div className="font-size-options flex flex-wrap gap-2">
            {fontSizeOptions.map((size) => (
              <button
                key={size.id}
                className={`font-size-option py-2 px-4 rounded-lg transition-all duration-200 ${
                  selectedFontSize.id === size.id 
                    ? 'bg-primary text-white' 
                    : 'bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary'
                }`}
                onClick={() => onFontSizeChange(size)}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Theme */}
        <div className="settings-section mb-8">
          <h3 className="settings-section-title text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">Theme</h3>
          <div className="theme-options flex flex-wrap gap-2">
            {themeOptions.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option py-2 px-4 rounded-lg transition-all duration-200 ${
                  selectedTheme.id === theme.id 
                    ? 'bg-primary text-white' 
                    : 'bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary'
                }`}
                onClick={() => onThemeChange(theme)}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Line Spacing */}
        <div className="settings-section mb-8">
          <h3 className="settings-section-title text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">Line Spacing</h3>
          <div className="line-spacing-options flex flex-wrap gap-2">
            {lineSpacingOptions.map((spacing) => (
              <button
                key={spacing.id}
                className={`line-spacing-option py-2 px-4 rounded-lg transition-all duration-200 ${
                  selectedLineSpacing.id === spacing.id 
                    ? 'bg-primary text-white' 
                    : 'bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary'
                }`}
                onClick={() => onLineSpacingChange(spacing)}
              >
                {spacing.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Additional settings could be added here */}
        <div className="settings-section">
          <h3 className="settings-section-title text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">More Options</h3>
          <div className="more-options space-y-4">
            <label className="more-option flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 rounded bg-elevated border-border-subtle text-primary focus:ring-primary/50"
              />
              <span className="text-sm">Show paragraph numbers</span>
            </label>
            <label className="more-option flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 rounded bg-elevated border-border-subtle text-primary focus:ring-primary/50"
              />
              <span className="text-sm">Justify text</span>
            </label>
            <label className="more-option flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 rounded bg-elevated border-border-subtle text-primary focus:ring-primary/50"
              />
              <span className="text-sm">Auto-scroll</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}