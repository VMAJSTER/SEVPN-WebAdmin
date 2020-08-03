import "core-js/es/promise";
import "core-js/es/string";
import "whatwg-fetch";
/** API test for 'Test', test RPC function */
export declare function Test_Test(): Promise<void>;
export declare function ListVirtualHubs(id: string): Promise<void>;
export declare function ShowVpnServerInfo(idInfo: string, idStatus: string): Promise<void>;
export declare function CreateNewHub(hubName: string, idList: string): Promise<void>;
export declare function DeleteVirtualHub(queryString: string): Promise<void>;
export declare function HubAdminPage(queryString: string): Promise<void>;
export declare function HubPropertiesPage(queryString: string): Promise<void>;
export declare function HubPropertiesSet(queryString: string, passwd: string, on: boolean, maxs: number, noenum: boolean, type: number): Promise<void>;
export declare function ListListeners(id: string): Promise<void>;
export declare function CreateNewListener(lisPort: number, idLis: string): Promise<void>;
export declare function DeleteListener(lisPort: number, idLis: string): Promise<void>;
export declare function EnableListener(lisPort: number, idLis: string): Promise<void>;
export declare function DisableListener(lisPort: number, idLis: string): Promise<void>;
export declare function ListConnections(id: string): Promise<void>;
export declare function ConnectionInfo(connection: string): Promise<void>;
export declare function Disconnection(con: string, conList: string): Promise<void>;
export declare function HubOnline(hubName: string): Promise<void>;
export declare function HubOffline(hubName: string): Promise<void>;
export declare function ExtendedHubInfo(queryString: string): Promise<void>;
export declare function ExtendedHubInfoDescription(vhub: string, eo: string): Promise<void>;
export declare function ExtendedHubSet(vhub: string, name: string, value: number): Promise<void>;
export declare function AdminOptionsInfo(queryString: string): Promise<void>;
export declare function AdminOptionsInfoDescription(vhub: string, eo: string): Promise<void>;
export declare function AdminOptionsSet(vhub: string, name: string, value: number): Promise<void>;
//# sourceMappingURL=main.d.ts.map