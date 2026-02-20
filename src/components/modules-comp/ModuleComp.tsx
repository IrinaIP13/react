import './ModulesComp.css'
interface ModuleCompProps {
    module: string
}

export const ModuleComp = ({module}: ModuleCompProps) => {
    return (
        <p className={`module`}>
            - {module}
        </p>
    );
};
