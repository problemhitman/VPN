import { Language } from './type';

const deutsch: Language = {
    global: {},
    status: {
        connecting: 'Verbinde ...',
        connected: 'Verbunden',
        connected_confirm: 'Verbunden',
        disconnecting: 'Trenne ...',
        disconnected: 'Getrennt',
        ip_check: 'IP wird geprüft ...',
        keep_trying: 'Bitte warten Sie einen Moment, um es erneut zu versuchen...'
    },
    home: {
        title_warp_based: 'Warp',
        drawer_settings_warp: 'Warp-Einstellungen',
        drawer_settings_routing_rules: 'Routing-Regeln',
        drawer_settings_app: 'App-Einstellungen',
        drawer_settings_scanner: 'Scannereinstellungen',
        drawer_settings_network: 'Netzwerkeinstellungen',
        drawer_log: 'Protokoll',
        drawer_update: 'Update',
        drawer_update_label: 'Neues Update',
        drawer_speed_test: 'Geschwindigkeitstest',
        drawer_about: 'Über',
        drawer_lang: 'Sprache ändern',
        drawer_singbox: 'Singbox-Einstellungen'
    },
    toast: {
        ip_check_please_wait:
            'Bitte warten Sie einige Sekunden, um die Prüfung erneut zu versuchen!',
        ir_location:
            'Cloudflare hat eine Verbindung zu einer IP mit einem iranischen Standort hergestellt, die sich von Ihrer tatsächlichen IP unterscheidet. Sie können damit die Filterung umgehen, jedoch keine Sanktionen. Mach dir keine Sorge! Sie können den Speicherort in den Einstellungen mit der Option „Gool“ oder „Psiphon“ ändern.',
        btn_submit: 'Verstanden',
        copied: 'Kopiert!',
        cleared: 'Das Protokoll wurde gelöscht!',
        please_wait: 'Bitte warten ...',
        offline: 'Sie sind offline!',
        settings_changed:
            'Das Anwenden der Einstellungen erfordert ein erneutes herstellen der Verbindung.'
    },
    settings: {
        title: 'Warp-Einstellungen',
        more: 'Mehr Einstellungen',
        method_warp: 'Warp',
        method_warp_desc: 'Warp aktivieren',
        method_gool: 'Gool',
        method_gool_desc: 'WarpInWarp aktivieren',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Psiphon aktivieren',
        method_psiphon_location: 'Land',
        method_psiphon_location_auto: 'Automatisch',
        method_psiphon_location_desc: 'Gewünschte Länder-IP auswählen',
        endpoint: 'Endpunkt',
        endpoint_desc: 'Combination of IP or domain name, along with port',
        license: 'Lizenz',
        license_desc: 'Der Lizenzverbrauch verdoppelt sich',
        option: 'Anwendungseinstellungen',
        network: 'Netzwerkeinstellungen',
        proxy_mode: 'Konfiguration',
        proxy_mode_desc: 'Proxy-Einstellungen festlegen',
        port: 'Proxy-Port',
        port_desc: 'Proxy-Port der Anwendungs festlegen',
        share_vpn: 'Freigeben (LAN)',
        share_vpn_desc: 'Proxy im Netzwerk freigeben',
        dns: 'DNS',
        dns_desc: 'Werbung und Inhalte für Erwachsene blockieren',
        dns_error: 'Es ist auf die Warp- und Gool-Methoden anwendbar',
        ip_data: 'IP Check',
        ip_data_desc: 'IP & Standort nach herstellen der Verbindung anzeigen',
        data_usage: 'Datennutzung',
        data_usage_desc: 'Anzeige der Datennutzung und Echtzeitgeschwindigkeit',
        dark_mode: 'Dunkler Modus',
        dark_mode_desc: 'Anzeigemodus der Anwendung angeben',
        lang: 'Sprache',
        lang_desc: 'Sprache der Anwendungsoberfläche ändern',
        open_login: 'Mit Windows starten',
        open_login_desc: 'Beim Systemstart öffnen',
        auto_connect: 'Automatische Verbindung',
        auto_connect_desc: 'Verbinden, wenn App geöffnet wird',
        system_tray: 'System Tray',
        system_tray_desc: 'Not placing the program icon in the taskbar',
        force_close: 'Erzwungenes Schließen',
        force_close_desc: 'Nach dem Beenden nicht im System Tray bleiben',
        shortcut: 'Navigator',
        shortcut_desc: 'Verknüpfungen auf der Startseite',
        restore: 'Wiederherstellen',
        restore_desc: 'Einstellungen auf Standard zurücksetzen',
        scanner: 'Scannereinstellungen',
        scanner_alert: 'Der Scanner ist aktiviert, wenn Sie die Standard-Endpunktadresse verwenden',
        scanner_ip_type: 'Endpunkttyp',
        scanner_ip_type_auto: 'Automatisch',
        scanner_ip_type_desc: 'IP des Endpunkts automatisch finden',
        scanner_rtt: 'Intervall',
        scanner_rtt_default: 'Standard',
        scanner_rtt_desc: 'RTT-Limit des Scanners',
        scanner_reserved: 'Reserviert',
        scanner_reserved_desc: 'Reservierten Wireguard-Wert überschreiben',
        routing_rules: 'Schwarze Liste',
        routing_rules_desc: 'Verhindern Sie, dass Datenverkehr durch Warp geleitet wird',
        routing_rules_disabled: 'Deaktiviert',
        routing_rules_items: 'Elemente',
        profile: 'Profil',
        profile_desc: 'Von Ihnen gespeicherte Endpunkte',
        singbox: 'Singbox-Einstellungen',
        close_singbox: 'Betrieb stoppen',
        close_singbox_desc: 'Singbox bei Trennung automatisch schließen',
        close_helper: 'Helfer stoppen',
        close_helper_desc: 'Helper beim Beenden automatisch schließen',
        mtu: 'MTU-Wert',
        mtu_desc: 'Die maximale Übertragungseinheit festlegen',
        geo_block: 'Blockierung',
        geo_block_desc: 'Werbung, Malware, Phishing und Kryptowährungs-Miner',
        geo_rules_ip: 'IP-Routing',
        geo_rules_ip_desc: 'Anwenden von GeoIP-Regeln',
        geo_rules_site: 'Web-Routing',
        geo_rules_site_desc: 'Anwenden von GeoSite-Regeln',
        more_helper: 'Assistenteneinstellungen'
    },
    tabs: {
        home: 'Verbinden',
        warp: 'Warp',
        network: 'Netzwerk',
        scanner: 'Scanner',
        app: 'App',
        singbox: 'Singbox'
    },
    modal: {
        endpoint_title: 'Endpunkt',
        license_title: 'Lizenz',
        license_desc:
            'Für die Ausführung des Programms ist nicht unbedingt eine Warp-Lizenz erforderlich. Wenn Sie möchten, können Sie Ihre Lizenz hier eingeben.',
        license_clear: 'Löschen',
        port_title: 'Proxy-Port',
        restore_title: 'Standardeinstellungen wiederherstellen',
        restore_desc:
            'Durch die Bestätigung des Vorgangs werden alle Programmeinstellungen auf den Standard zurückgesetzt und Ihre Verbindung wird getrennt.',
        routing_rules_sample: 'Beispiel',
        routing_rules_alert_tun:
            'Nur die Routing-Regeln für Domain, ip und App wirken sich auf die Tun-Konfiguration aus.',
        routing_rules_alert_system:
            'Mit Ausnahme der App-Routing-Regel wirken sich andere Regeln auf die System-Proxy-Konfiguration aus.',
        endpoint_default: 'Standard',
        endpoint_suggested: 'Empfohlen',
        endpoint_latest: 'Neueste',
        endpoint_update: 'Empfohlene Endpunkte erhalten',
        endpoint_paste: 'aktiven Endpunkt einfügen',
        profile_title: 'Profil',
        profile_name: 'Titel',
        profile_endpoint: 'Endpunkt',
        profile_limitation: (value) => `Sie können maximal ${value} Endpunkte hinzufügen.`,
        mtu_title: 'MTU-Wert',
        mtu_desc:
            'Die maximale Übertragungseinheit (MTU) bezieht sich auf die maximale Größe von Datenpaketen, die zwischen 1000 und 9999 eingestellt werden sollte.',
        confirm: 'Ich bestätige',
        update: 'Update',
        cancel: 'Abbrechen'
    },
    log: {
        title: 'Protokoll',
        desc: 'Wenn vom Programm ein Protokoll erstellt wird, wird es hier angezeigt.',
        error_invalid_license: 'Die eingegebene Lizenz ist ungültig; Entfernen Sie es.',
        error_too_many_connected: 'Das Lizenznutzungslimit ist erreicht; Entfernen Sie es.',
        error_access_denied: 'Führen Sie das Programm als Als Administrator ausführen aus.',
        error_failed_set_endpoint:
            'Überprüfen oder ersetzen Sie den Endpunktwert oder versuchen Sie es erneut.',
        error_warp_identity: 'Authentifizierungsfehler in Cloudflare; Versuchen Sie es erneut.',
        error_script_failed: 'Das Programm hat einen Fehler festgestellt; Versuchen Sie es erneut.',
        error_object_null: 'Das Programm hat einen Fehler festgestellt; Versuchen Sie es erneut.',
        error_port_already_in_use: (value) =>
            `Port ${value} wird von einem anderen Programm verwendet; Ändern Sie es.`,
        error_port_socket: 'Anderen Port verwenden.',
        error_unknown_flag: 'Im Hintergrund wurde ein ungültiger Befehl ausgeführt.',
        error_deadline_exceeded: 'Zeitüberschreitung bei der Verbindung; Versuchen Sie es erneut.',
        error_configuration_encountered: 'Proxy-Konfiguration hat einen Fehler festgestellt!',
        error_desktop_not_supported: 'Desktop-Umgebung wird nicht unterstützt!',
        error_configuration_not_supported:
            'Proxy-Konfiguration wird in Ihrem Betriebssystem nicht unterstützt, aber Sie können Warp Proxy manuell verwenden.',
        error_configuring_proxy: (value) => `Fehler beim Konfigurieren des Proxys für ${value}!`,
        error_wp_not_found: 'Die Datei warp-plus befindet sich nicht neben dem Anwendungspaket.',
        error_wp_stopped: 'Die Datei warp-plus hat ein Problem beim Ausführen!',
        error_connection_failed: 'Verbindung zu 1.1.1.1 war nicht möglich.',
        error_country_failed: 'Verbindung zum ausgewählten Land nicht möglich.',
        error_singbox_failed_stop: 'Sing-Box konnte nicht gestoppt werden!',
        error_singbox_failed_start: 'Sing-Box konnte nicht gestartet werden!'
    },
    about: {
        title: 'Über',
        desc: 'Dieses Programm ist eine inoffizielle, aber zuverlässige Version der Oblivion-App für Windows, Linux und Mac.\nDas Oblivion Desktop-Programm ist der Benutzeroberfläche der von Yousef Ghobadi entwickelten Originalversion nachempfunden. Es wurde für den Zweck des freien Zugangs zum Internet geschrieben und erstellt.\nEine Namensänderung oder kommerzielle Nutzung ist nicht gestattet.',
        slogan: 'Internet, für alle oder niemanden!'
    },
    systemTray: {
        connect: 'Verbinden',
        connecting: 'Verbinden ...',
        connected: 'Verbunden',
        disconnecting: 'Trennen ...',
        settings: 'Einstellungen',
        settings_warp: 'Warp',
        settings_network: 'Netzwerk',
        settings_scanner: 'Scanner',
        settings_app: 'Anwendung',
        about: 'Über',
        log: 'Protokoll',
        speed_test: 'Geschwindigkeitstest',
        exit: 'Beenden'
    },
    update: {
        available: 'Update verfügbar',
        available_message: (value) =>
            `Eine neue Version von ${value} ist verfügbar. Möchten Sie jetzt aktualisieren?`,
        ready: 'Update bereit',
        ready_message: (value) =>
            `Eine neue Version von ${value} ist bereit. Sie wird nach einem Neustart installiert. Möchten Sie jetzt neu starten?`
    },
    speedTest: {
        title: 'Geschwindigkeitstest',
        initializing: 'Geschwindigkeitstest wird initialisiert ...',
        click_start: 'Klicken Sie auf die Schaltfläche, um den Geschwindigkeitstest zu starten',
        error_msg:
            'Während des Geschwindigkeitstests ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        server_unavailable: 'Geschwindigkeitstest-Server nicht verfügbar',
        download_speed: 'Download-Geschwindigkeit',
        upload_speed: 'Upload-Geschwindigkeit',
        latency: 'Latenz',
        jitter: 'Jitter'
    }
};
export default deutsch;
